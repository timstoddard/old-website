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
var lang_1 = require('@angular/core/src/facade/lang');
var CapitalizedCasePipe = (function () {
    function CapitalizedCasePipe() {
    }
    CapitalizedCasePipe.prototype.transform = function (value) {
        if (lang_1.isBlank(value) || !lang_1.isString(value) || !value.length) {
            return '';
        }
        var trimmed = value.trim();
        if (/\w/.test(trimmed.charAt(0))) {
            trimmed = trimmed.charAt(0).toLocaleUpperCase() + trimmed.substr(1);
        }
        for (var i = 1; i < trimmed.length - 1; i++) {
            if (/\s\w/.test(trimmed.substr(i, 2))) {
                trimmed = trimmed.substr(0, i + 1)
                    + trimmed.charAt(i + 1).toLocaleUpperCase()
                    + trimmed.substr(i + 2);
            }
        }
        return trimmed;
    };
    CapitalizedCasePipe = __decorate([
        core_1.Pipe({
            name: 'appCapitalizedCase'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizedCasePipe);
    return CapitalizedCasePipe;
}());
exports.CapitalizedCasePipe = CapitalizedCasePipe;
//# sourceMappingURL=capitalized-case.pipe.js.map