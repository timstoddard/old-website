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
var nickname_chunk_type_1 = require('../shared/nickname-chunk-type');
var AddNicknameChunkComponent = (function () {
    function AddNicknameChunkComponent() {
        this.addChunk = new core_1.EventEmitter();
        this.currentType = '';
        this.editing = false;
        this.nicknameChunkTypeEnum = nickname_chunk_type_1.NicknameChunkType;
    }
    AddNicknameChunkComponent.prototype.onNewClick = function () {
        this.editing = true;
        this.currentType = '';
    };
    AddNicknameChunkComponent.prototype.setType = function (type) {
        this.currentType = type;
    };
    AddNicknameChunkComponent.prototype.onAddClick = function () {
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
    ], AddNicknameChunkComponent.prototype, "addChunk", void 0);
    AddNicknameChunkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-nickname-chunk',
            templateUrl: 'add-nickname-chunk.component.html',
            styleUrls: ['add-nickname-chunk.component.css', '../../../globals.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AddNicknameChunkComponent);
    return AddNicknameChunkComponent;
}());
exports.AddNicknameChunkComponent = AddNicknameChunkComponent;
//# sourceMappingURL=add-nickname-chunk.component.js.map