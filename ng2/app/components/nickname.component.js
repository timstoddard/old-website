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
var add_nickname_chunk_component_1 = require('./add_nickname_chunk.component');
var adjective_service_1 = require('../services/adjective.service');
var adverb_service_1 = require('../services/adverb.service');
var verb_service_1 = require('../services/verb.service');
var NicknameComponent = (function () {
    function NicknameComponent(_adjectiveService, _adverbService, _verbService) {
        this._adjectiveService = _adjectiveService;
        this._adverbService = _adverbService;
        this._verbService = _verbService;
        this.showWelcome = false;
        this.nicknameChunks = [];
        this.alliteration = false;
    }
    NicknameComponent.prototype.onNameInputBlur = function (event) {
        this.name = event.target.value;
        this.showWelcome = true;
        this.nickname = '';
    };
    NicknameComponent.prototype.addChunk = function (type) {
        this.nicknameChunks.push({
            type: type,
            value: '',
            locked: false
        });
    };
    NicknameComponent.prototype.remove = function (index) {
        this.nicknameChunks.splice(index, 1);
        this.nickname = '';
    };
    NicknameComponent.prototype.generateNickname = function () {
        var _this = this;
        var firstLetterOfName = this.alliteration ? this.name.charAt(0).toLowerCase() : null;
        this.nickname = '';
        this.nicknameChunks.forEach(function (chunk) {
            if (chunk.type === 'adjective') {
                chunk.value = _this._adjectiveService.get(firstLetterOfName) + " ";
                _this.nickname += chunk.value;
            }
            else if (chunk.type === 'adverb') {
                chunk.value = _this._adverbService.get(firstLetterOfName) + " ";
                _this.nickname += chunk.value;
            }
            else if (chunk.type === 'verb') {
                chunk.value = _this._verbService.get(firstLetterOfName) + " ";
                _this.nickname += chunk.value;
            }
        });
        this.nickname += this.name;
    };
    NicknameComponent = __decorate([
        core_1.Component({
            selector: 'nickname',
            templateUrl: './nickname.component.html',
            styleUrls: ['./nickname.component.css'],
            directives: [add_nickname_chunk_component_1.AddNicknameChunk],
            providers: [adjective_service_1.AdjectiveService, adverb_service_1.AdverbService, verb_service_1.VerbService],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [adjective_service_1.AdjectiveService, adverb_service_1.AdverbService, verb_service_1.VerbService])
    ], NicknameComponent);
    return NicknameComponent;
}());
exports.NicknameComponent = NicknameComponent;
//# sourceMappingURL=nickname.component.js.map