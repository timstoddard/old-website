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
var add_nickname_chunk_component_1 = require('./add-nickname-chunk/add-nickname-chunk.component');
var adjective_service_1 = require('./shared/adjective.service');
var adverb_service_1 = require('./shared/adverb.service');
var capitalized_case_pipe_1 = require('./shared/capitalized-case.pipe');
var nickname_chunk_type_1 = require('./shared/nickname-chunk-type');
var verb_service_1 = require('./shared/verb.service');
var NicknameComponent = (function () {
    function NicknameComponent(adjectiveService, adverbService, verbService, changeDetectorRef) {
        this.adjectiveService = adjectiveService;
        this.adverbService = adverbService;
        this.verbService = verbService;
        this.changeDetectorRef = changeDetectorRef;
        this.nameString = 'tim';
        this.showWelcome = false;
        this.nicknameChunks = [];
        this.alliteration = false;
        // add way to save previous nameString value
        this.previousNameString = '';
    }
    Object.defineProperty(NicknameComponent.prototype, "name", {
        get: function () {
            return this.nameString;
        },
        set: function (value) {
            if (!value || !value.length) {
                this.nameString = '';
            }
            else {
                this.nameString = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NicknameComponent.prototype.addChunk = function (type) {
        this.nicknameChunks.push({
            type: type,
            value: '',
            locked: false
        });
    };
    NicknameComponent.prototype.remove = function (index) {
        this.nicknameChunks.splice(index, 1);
    };
    NicknameComponent.prototype.newValue = function (chunk) {
        var firstLetterOfName = this.alliteration ? this.name.charAt(0).toLowerCase() : null;
        if (!chunk.locked) {
            if (chunk.type === nickname_chunk_type_1.NicknameChunkType.ADJECTIVE) {
                chunk.value = this.adjectiveService.get(firstLetterOfName);
            }
            else if (chunk.type === nickname_chunk_type_1.NicknameChunkType.ADVERB) {
                chunk.value = this.adverbService.get(firstLetterOfName);
            }
            else if (chunk.type === nickname_chunk_type_1.NicknameChunkType.VERB) {
                chunk.value = this.verbService.get(firstLetterOfName);
            }
        }
    };
    NicknameComponent.prototype.generateNickname = function () {
        var _this = this;
        this.nicknameChunks.forEach(function (chunk) { return _this.newValue(chunk); });
        this.generated = true;
        this.changeDetectorRef.markForCheck();
    };
    NicknameComponent.prototype.onChunkClick = function (index, event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.shiftKey) {
            this.newValue(this.nicknameChunks[index]);
        }
        else {
            this.nicknameChunks[index].locked = !this.nicknameChunks[index].locked;
        }
    };
    NicknameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nickname',
            templateUrl: 'nickname.component.html',
            styleUrls: ['nickname.component.css', '../globals.css'],
            directives: [add_nickname_chunk_component_1.AddNicknameChunkComponent],
            providers: [adjective_service_1.AdjectiveService, adverb_service_1.AdverbService, verb_service_1.VerbService],
            pipes: [capitalized_case_pipe_1.CapitalizedCasePipe],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [adjective_service_1.AdjectiveService, adverb_service_1.AdverbService, verb_service_1.VerbService, core_1.ChangeDetectorRef])
    ], NicknameComponent);
    return NicknameComponent;
}());
exports.NicknameComponent = NicknameComponent;
//# sourceMappingURL=nickname.component.js.map