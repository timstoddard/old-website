import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'add-nickname-chunk',
	templateUrl: './add_nickname_chunk.component.html',
	styleUrls: ['./add_nickname_chunk.component.css'],
	moduleId: module.id
})
export class AddNicknameChunk {
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
