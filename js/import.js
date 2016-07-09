/* TODOs */
// add detection for lines without a semicolon at the end
// check if module contains '*' when adding new imports
	// if it does, discard other imports
	// also, what to do if imports is empty due to importing the whole module

/* TEST DATA
import {Subject as subj, Observable as obs} from 'rxjs/Subject';
import {ADirective, AComponent, AService, APipe} from './test-module';
import {SomeClass} from '../test-module';
import * from './idk';
import DefaultClass from './file.name';
import {
	expect,
	it,
	describe
} from '@angular/core/testing';
import {EventEmitter, Component} from '@angular/core';
import {  Location,  EventEmitter  } from '@angular/core';
import {TestComponent, OtherComponent, ACoolService, SomeDirective, CoolOtherComponent, OtherOtherComponent, asyncValidator, state, acoolservice, LOWERCASE, uppercase} from '../my/app/is/cool';
import * as something from './test-me';
*/

// more info: https://www.typescriptlang.org/docs/handbook/module-resolution.html

/**
 * expects a valid import statement followed by a semicolon
*/
function fixData() {

	var lines = document
		.getElementById('imports').value // read in the data
		.replace(/;+/, ';') // remove duplicate semicolons
		.replace(/\s+/g, ' ') // condense all whitespace
		.split(';'); // split over the semicolons
	
	// create an object to hold of the module objects
	var modules = {};
	lines.forEach(function(value) {
		// don't want any blank imports
		if (value.trim().length > 0) {
			// need module name, as well as data about import
			var data = getData(value);
			if (!modules[data.path]) {
				modules[data.path] = data; // create new module object
			} else {
				// add data to existing module object
				var newImports = data.imports;
				// loop over all the new imports
				newImports.forEach(function(value) {
					// check if module already contains this import
					var alreadyContained = false;
					modules[data.path].imports.forEach(function(existingValue) {
						if (existingValue.importName === value.importName) {
							alreadyContained = true;
						}
					});
					if (!alreadyContained) {
						// this module doesn't exist yet, so add it
						modules[data.path].imports.push(value);
					}
				});
			}
		}
	});

	// sort imports and split into third party and internal imports
	var thirdPartyImports = [];
	var internalImports = [];
	for (var prop in modules) {
		var currentModule = modules[prop];
		currentModule.imports.sort(function(a, b) {
			return a.importName.toLowerCase().localeCompare(b.importName.toLowerCase());
		});
		if (currentModule.thirdParty) {
			thirdPartyImports.push(currentModule);
		} else {
			internalImports.push(currentModule);
		}
	}

	// sort modules by name
	var sorter = function(a, b) {
		var result = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
		if (result === 0) {
			return a.pathLength < b.pathLength ? -1 : 1;
		}
		return result;
	};
	thirdPartyImports.sort(sorter);
	internalImports.sort(sorter);

	// generate the final string
	var result = '';
	if (thirdPartyImports) {
		thirdPartyImports.forEach(function(value, index) {
			var importStr = generateImportString(value.imports, value.path, value.brackets);
			result += importStr + (index < thirdPartyImports.length - 1 ? '\n' : '');
		});
		if (internalImports) {
			result += '\n\n';
			internalImports.forEach(function(value, index) {
				var importStr = generateImportString(value.imports, value.path, value.brackets);
				result += importStr + (index < internalImports.length - 1 ? '\n' : '');
			});
		}
	} else {
		internalImports.forEach(function(value, index) {
			var importStr = generateImportString(value.imports, value.path, value.brackets);
			result += importStr + (index < internalImports.length - 1 ? '\n' : '');
		});
	}

	result = result.trim();
	document.getElementById('output').innerText = result;
	this.select();
}

function generateImportString(imports, moduleName, useBrackets) {
	var importStr = 'import ' + (useBrackets ? '{ ' : '');
	if (imports.length > 0) {
		imports.forEach(function(importValue, index) {
			importStr += importValue.importName + (importValue.alias ? ' as ' + importValue.alias : '') + (index < imports.length - 1 ? ', ' : '');
		});
		importStr += (useBrackets ? ' }' : '') + ' from \'' + moduleName + '\';';
	} else {
		importStr += ' \'' + moduleName + '\';';
	}
	return importStr;
}

function getData(str) {
	
	// module data
	var moduleName = '';
	if (str.indexOf('\'') > -1) { // single quotes
		moduleName = str.substring(str.indexOf('\'') + 1, str.lastIndexOf('\''));
	} else { // double quotes
		moduleName = str.substring(str.indexOf('"') + 1, str.lastIndexOf('"'));
	}
	var firstModuleNameChar = moduleName.search(/[^\.\/]/);
	var prefixLength = moduleName.substr(0, firstModuleNameChar).length;
	var moduleNameStripped = moduleName.substr(firstModuleNameChar).trim();

	// import data
	var aliases = [];
	var brackets = true;
	if (str.indexOf('{') > -1 && str.indexOf('}') > -1) {
		var imports = str.substring(str.indexOf('{') + 1, str.indexOf('}')).split(',');
		imports.forEach(function(value) {
			if (value.indexOf(' as ') > -1) {
				var data = value.split(' as ');
				aliases.push({ importName: data[0].trim(), alias: data[1].trim() });
			} else {
				aliases.push({ importName: value.trim() });
			}
		});
	} else {
		brackets = false;
		if (str.indexOf('from') > -1) {
			var importStr = str.substring(str.indexOf('import') + 6, str.indexOf('from'));
			if (importStr.indexOf(' as ') > -1) { // case: import <stuff> as idk from './test';
				var data = importStr.split(' as ');
				aliases.push({ importName: data[0].trim(), alias: data[1].trim() });
			} else { // case: import <stuff> from './test';
				aliases.push({ importName: importStr.trim() });
			}
		} // else --> case: import './test';
	}

	return {
		name: moduleNameStripped,
		path: moduleName,
		pathLength: prefixLength,
		imports: aliases,
		thirdParty: !/[./]/.test(moduleName[0]),
		brackets: brackets
	}
}

function select() {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('output'));
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
