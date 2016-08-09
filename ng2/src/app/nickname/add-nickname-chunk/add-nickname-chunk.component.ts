import { Component, EventEmitter, Output } from '@angular/core';

import { NicknameChunkType } from '../shared/nickname-chunk-type';

@Component({
	moduleId: module.id,
	selector: 'app-add-nickname-chunk',
	templateUrl: 'add-nickname-chunk.component.html',
	styleUrls: ['add-nickname-chunk.component.css', '../../../globals.css']
})
export class AddNicknameChunkComponent {
	@Output() addChunk = new EventEmitter();
	currentType: string = '';
	editing = false;
	nicknameChunkTypeEnum = NicknameChunkType;

	onNewClick() {
		this.editing = true;
		this.currentType = '';
	}

	setType(type: string) {
		this.currentType = type;
	}
	
	onAddClick() {
		if (this.currentType === '') {
			alert('Please select a part of speech to add to your nickname!');
			return;
		}
		this.addChunk.emit(this.currentType);
		this.editing = false;
	}
}
