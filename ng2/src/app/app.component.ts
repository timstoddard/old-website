import { Component } from '@angular/core';
import { NicknameComponent } from './nickname/nickname.component';

@Component({
    moduleId: module.id,
    selector: 'nn-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', '../globals.css'],
    directives: [NicknameComponent]
})
export class AppComponent {}
