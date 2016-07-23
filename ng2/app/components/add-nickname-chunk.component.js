"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AddNicknameChunk = (function () {
    function AddNicknameChunk() {
        this.addChunk = new core_1.EventEmitter();
        this.currentType = '';
        this.editing = false;
    }
    AddNicknameChunk.prototype.onNewClick = function () {
        this.editing = true;
        this.currentType = '';
    };
    AddNicknameChunk.prototype.setType = function (type) {
        this.currentType = type;
    };
    AddNicknameChunk.prototype.onAddClick = function () {
        if (this.currentType === '') {
            alert('Please select a part of speech to add to your nickname!');
            return;
        }
        this.addChunk.emit(this.currentType);
        this.editing = false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddNicknameChunk.prototype, "addChunk", void 0);
    AddNicknameChunk = __decorate([
        core_1.Component({
            selector: 'add-nickname-chunk',
            templateUrl: './add_nickname_chunk.component.html',
            styleUrls: ['./add_nickname_chunk.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], AddNicknameChunk);
    return AddNicknameChunk;
}());
exports.AddNicknameChunk = AddNicknameChunk;
//# sourceMappingURL=add-nickname-chunk.component.js.map