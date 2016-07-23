import {Component} from '@angular/core';
import {NicknameComponent} from './components/nickname/nickname.component';

@Component({
    selector: 'nn-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NicknameComponent],
    moduleId: module.id
})
export class AppComponent {}
