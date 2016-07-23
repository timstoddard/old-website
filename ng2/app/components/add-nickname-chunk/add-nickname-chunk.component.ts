import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-add-nickname-chunk',
	templateUrl: 'add-nickname-chunk.component.html',
	styleUrls: ['add-nickname-chunk.component.css'],
	moduleId: module.id
})
export class AddNicknameChunkComponent {
	@Output() addChunk = new EventEmitter();
	currentType: string = '';
	editing = false;

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
