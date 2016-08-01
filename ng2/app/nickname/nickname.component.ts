import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AddNicknameChunkComponent } from './add-nickname-chunk/add-nickname-chunk.component';
import { AdjectiveService } from './shared/adjective.service';
import { AdverbService } from './shared/adverb.service';
import { CapitalizedCasePipe } from './shared/capitalized-case.pipe';
import { NicknameChunkType } from './shared/nickname-chunk-type';
import { VerbService } from './shared/verb.service';

@Component({
    moduleId: module.id,
    selector: 'app-nickname',
    templateUrl: 'nickname.component.html',
    styleUrls: ['nickname.component.css', '../globals.css'],
	directives: [AddNicknameChunkComponent],
	providers: [AdjectiveService, AdverbService, VerbService],
	pipes: [CapitalizedCasePipe],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NicknameComponent {
	nameString: string = 'tim';
	showWelcome: boolean = false;
	nicknameChunks: NicknameChunk[] = [];
	alliteration: boolean = false;
	generated: boolean;
	// add way to save previous nameString value
	previousNameString: string = '';

	constructor(
		private adjectiveService: AdjectiveService,
		private adverbService: AdverbService,
		private verbService: VerbService,
		private changeDetectorRef: ChangeDetectorRef) {}

	get name() {
		return this.nameString;
	}

	set name(value: string) {
		if (!value || !value.length) {
			this.nameString = '';
			/* don't do this? */
			// this.generated = false;
			// this.nicknameChunks.forEach(chunk => {
			// 	chunk.locked = false;
			// });
			/* -------------- */
		} else {
			this.nameString = value;
		}
	}

	addChunk(type: string) {
		this.nicknameChunks.push({
			type: type,
			value: '',
			locked: false
		});
	}

	remove(index: number) {
		this.nicknameChunks.splice(index, 1);
	}

	newValue(chunk: NicknameChunk) {
		let firstLetterOfName = this.alliteration ? this.name.charAt(0).toLowerCase() : null;
		if (!chunk.locked) {
			if (chunk.type === NicknameChunkType.ADJECTIVE) {
				chunk.value = this.adjectiveService.get(firstLetterOfName);
			} else if (chunk.type === NicknameChunkType.ADVERB) {
				chunk.value = this.adverbService.get(firstLetterOfName);
			} else if (chunk.type === NicknameChunkType.VERB) {
				chunk.value = this.verbService.get(firstLetterOfName);
			}
		}
	}

	generateNickname() {
		this.nicknameChunks.forEach(chunk => this.newValue(chunk));
		this.generated = true;
		this.changeDetectorRef.markForCheck();
	}

	onChunkClick(index: number, event: any) {
		event.preventDefault();
		event.stopPropagation();
		if (event.shiftKey) {
			this.newValue(this.nicknameChunks[index]);
		} else {
			this.nicknameChunks[index].locked = !this.nicknameChunks[index].locked;
		}
	}
}

interface NicknameChunk {
	type: string;
	value: string;
	locked: boolean;
}
