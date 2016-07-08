/* TEST DATA
import {Subject} from 'rxjs/Subject';
import {ADirective, AComponent, AService, APipe} from './test-module';
import {EventEmitter, Component} from '@angular/core';
import {TestComponent, OtherComponent, ACoolService, SomeDirective, CoolOtherComponent, OtherOtherComponent, asyncValidator, state, acoolservice, LOWERCASE, uppercase} from '../my/app/is/cool';
*/

function fixData() {
	var lines = document.getElementById('imports').value.split('\n');
	console.log(lines)
	var fixedLines = [];
	lines.forEach(function(value, index) {
		if (value.trim() === '') {
			return;
		}
		fixedLines.push(fix(value));
	});
	
	var thirdPartyImports = fixedLines.filter(function(value) {
		return value.thirdParty;
	});
	thirdPartyImports.sort(function(a, b) {
		var result = a.strippedModuleName.toLowerCase().localeCompare(b.strippedModuleName.toLowerCase());
		if (result === 0) {
			return a.localeCompare(b);
		}
		return result;
	});
	var internalImports = fixedLines.filter(function(value) {
		return !value.thirdParty;
	});
	internalImports.sort(function(a, b) {
		var result = a.strippedModuleName.toLowerCase().localeCompare(b.strippedModuleName.toLowerCase());
		if (result === 0) {
			return a.localeCompare(b);
		}
		return result;
	});
	
	var result = '';
	thirdPartyImports.forEach(function(value) {
		result += value.toString + '\n';
	});
	result += '\n';
	internalImports.forEach(function(value) {
		result += value.toString + '\n';
	});
	console.log(result);
	document.getElementById('output').innerText = result;
	this.select();
}

function fix(str) {
	if (!/^import \{[\w, ]*} from ('|").*('|");$/.test(str)) {
		return;
	}
	
	// find and sort the imports
	var bracketStart = str.indexOf('{');
	var bracketEnd = str.indexOf('}');
	var imports = str.substring(bracketStart + 1, bracketEnd).split(',');
	imports.forEach(function(value, index) {
		imports[index] = value.trim();
	});
	imports.sort(function(a, b) {
		var result = a.toLowerCase().localeCompare(b.toLowerCase());
		if (result === 0) {
			return a.localeCompare(b);
		}
		return result;
	});

	// find and analyze the module name
	var moduleStart = str.indexOf('\'');
	var moduleEnd = str.lastIndexOf('\'');
	var moduleNameFull = str.substring(moduleStart + 1, moduleEnd);

	var thirdParty = !/[./]/.test(moduleNameFull[0]);

	var moduleNameStripped = moduleNameFull.toString();
	while (!/\w/.test(moduleNameStripped[0])) {
		moduleNameStripped = moduleNameStripped.substr(1);
	}
	moduleNameStripped = moduleNameStripped.trim();

	var formatted = 'import { ' + imports.join(', ') + ' } from \'' + moduleNameFull + '\';';

	var data = {
		strippedModuleName: moduleNameStripped,
		thirdParty: thirdParty,
		toString: formatted
	}

	return data;
}

function select() {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('output'));
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
