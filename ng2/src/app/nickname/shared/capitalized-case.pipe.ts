import { Pipe, PipeTransform } from '@angular/core';
import { isBlank, isString } from '@angular/core/src/facade/lang';

@Pipe({
	name: 'appCapitalizedCase'
})
export class CapitalizedCasePipe implements PipeTransform {
	transform(value: string) {
		if (isBlank(value) || !isString(value) || !value.length) {
			return '';
		}
		let trimmed = value.trim();
		if (/\w/.test(trimmed.charAt(0))) {
			trimmed = trimmed.charAt(0).toLocaleUpperCase() + trimmed.substr(1);
		}
		for (let i = 1; i < trimmed.length - 1; i++) {
			if (/\s\w/.test(trimmed.substr(i, 2))) {
				trimmed = trimmed.substr(0, i + 1)
					+ trimmed.charAt(i + 1).toLocaleUpperCase()
					+ trimmed.substr(i + 2);
			}
		}
		return trimmed;
	}
}
