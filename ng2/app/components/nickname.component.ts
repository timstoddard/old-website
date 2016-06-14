import {Component} from '@angular/core';
import {AddNicknameChunk} from './add_nickname_chunk.component';
import {AdjectiveService} from '../services/adjective.service';
import {AdverbService} from '../services/adverb.service';
import {VerbService} from '../services/verb.service';

@Component({
    selector: 'nickname',
    templateUrl: './nickname.component.html',
    styleUrls: ['./nickname.component.css'],
	directives: [AddNicknameChunk],
	providers: [AdjectiveService, AdverbService, VerbService],
    moduleId: module.id
})
export class NicknameComponent {
	name: string;
	showWelcome: boolean = false;
	nicknameChunks: NicknameChunk[] = [];
	alliteration: boolean = false;
	nickname: string;

	constructor(
		private _adjectiveService: AdjectiveService,
		private _adverbService: AdverbService,
		private _verbService: VerbService) {}

	onNameInputBlur(event: any) {
		this.name = event.target.value;
		this.showWelcome = true;
		this.nickname = '';
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
		this.nickname = '';
	}

	generateNickname() {
		let firstLetterOfName = this.alliteration ? this.name.charAt(0).toLowerCase() : null;
		this.nickname = '';
		this.nicknameChunks.forEach(chunk => {
			if (chunk.type === 'adjective') { // make an enum for these!!
				chunk.value = `${this._adjectiveService.get(firstLetterOfName)} `;
				this.nickname += chunk.value;
			} else if (chunk.type === 'adverb') {
				chunk.value = `${this._adverbService.get(firstLetterOfName)} `;
				this.nickname += chunk.value;
			} else if (chunk.type === 'verb') {
				chunk.value = `${this._verbService.get(firstLetterOfName)} `;
				this.nickname += chunk.value;
			}
		})
		this.nickname += this.name;
	}
}

interface NicknameChunk {
	type: string;
	value: string;
	locked: boolean;
}
