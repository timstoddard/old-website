/* TODOs */
// check if module contains '*' when adding new imports
	// if it does, discard other imports
	// also, what to do if imports is empty due to importing the whole module

// info on imports: https://www.typescriptlang.org/docs/handbook/module-resolution.html

document.getElementById('imports').focus();
var shiftKeyDown = false;

function loadMockData() {
	document.getElementById('imports').value =
		"import {Subject as subj, Observable as obs} from 'rxjs/Subject';\n" +
		"import {ADirective, AComponent, AService, APipe} from './test-module';;\n" +
		"import 'rxjs/add/observable/of'\n" + 
		"import {SomeClass} from '../test-module';\n" +
		"import * from './idk';\n" +
		"import DefaultClass from './file.name';\n" +
		"import {idk as lol} from './'\n" +
		"import { lol as idk  } from '../'\n" +
		"import {\n" +
		"	expect,\n" +
		"	it,\n" +
		"	describe\n" +
		"} from '@angular/core/testing';\n" +
		"import {EventEmitter, Component} from '@angular/core';;\n" +
		"import {  Location,  EventEmitter  } from '@angular/core'\n" +
		"import {TestComponent, OtherComponent, ACoolService, SomeDirective, CoolOtherComponent, OtherOtherComponent, asyncValidator, state, acoolservice, LOWERCASE, uppercase} from \"../my/app/is/cool\";\n" +
		"import * as something from './test-me';\n" +
		"import 'code'";
}

function checkKeyDown(event) {
	if (event.which === 16) {
		shiftKeyDown = true;
	}
	if (event.which === 13 && !shiftKeyDown) {
		event.stopPropagation();
    	event.preventDefault();
		fixData();
	}
}

function checkKeyUp(event) {
	if (event.which === 16) {
		shiftKeyDown = false;
	}
}

function replaceText(event) {
    event.stopPropagation();
    event.preventDefault();
    var clipboardData = event.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('Text');
	document.getElementById('imports').value = pastedData;
}

/**
 * expects a valid import statement followed by a semicolon
*/
function fixData() {

	// read in the data and format it
	var rawLines = document
		.getElementById('imports').value // read in the data
		.replace(/;;+/g, ';') // remove duplicate semicolons
		.split('\n'); // split over the newlines
	var lines = [];
	var lastLineWasComplete = true;
	rawLines.forEach(function(value) {
		// get rid of annoying whitespace
		value = value.trim();
		var lastChar = value.charAt(value.length - 1);
		// line ends with a semicolon -- awesome!
		if (lastChar === ';') {
			if (!lastLineWasComplete) {
				var lastLine = lines[lines.length - 1];
				lines[lines.length - 1] = lastLine + ' ' + value;
			} else {
				lines.push(value);
			}
			lastLineWasComplete = true;
		} else {
			// line is complete but missing a semicolon; add it and move on
			if (lastChar === '\'' || lastChar === '"') {
				if (!lastLineWasComplete) {
					var lastLine = lines[lines.length - 1];
					lines[lines.length - 1] = lastLine + ' ' + value + ';';
				} else {
					lines.push(value + ';');
				}
				lastLineWasComplete = true;
			// line is incomplete, add what is there and flag it for the next loop
			} else {
				if (!lastLineWasComplete) {
					var lastLine = lines[lines.length - 1];
					lines[lines.length - 1] = lastLine + ' ' + value;
				} else {
					lines.push(value);
				}
				lastLineWasComplete = false;
			}
		}
	});
	
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
		if (a.imports.length === 0) {
			if (b.imports.length === 0) {
				// a and b both have no imports, so sort by module name
				var result = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
				if (result === 0) {
					return a.pathLength < b.pathLength ? -1 : 1;
				}
				return result;
			} else {
				// a has no imports but b does, so b comes first
				return 1;
			}
		} else if (b.imports.length === 0) {
			// b has no imports but a does, so a comes first
			return -1;
		}
		// a and b both have imports, so sort by module name
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
	document.getElementById('output').focus();
}

function generateImportString(imports, moduleName, useBrackets) {
	var importStr = 'import ' + (useBrackets ? '{ ' : '');
	if (imports.length > 0) {
		imports.forEach(function(importValue, index) {
			importStr += importValue.importName + (importValue.alias ? ' as ' + importValue.alias : '') + (index < imports.length - 1 ? ', ' : '');
		});
		importStr += (useBrackets ? ' }' : '') + ' from \'' + moduleName + '\';';
	} else {
		importStr += '\'' + moduleName + '\';';
	}
	return reformatIfLineTooLong(importStr, 140);
}

function reformatIfLineTooLong(str, len) {
	if (str.length > len) {
		return str.replace(/{ /, '{\n    ').replace(/, /g, ',\n    ').replace(/ }/, '\n}');
	}
	return str;
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
	if (firstModuleNameChar === -1) { // only a relative path, no folder/file names
		firstModuleNameChar = moduleName.length;
	}
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
