import {Component} from '@angular/core';
import {NicknameComponent} from './components/nickname.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [NicknameComponent],
    moduleId: module.id
})
export class AppComponent {}
