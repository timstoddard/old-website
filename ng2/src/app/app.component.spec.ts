import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { By } from '@angular/platform-browser';
import { ViewMetadata } from '@angular/core';

import { AppComponent } from './app.component';

////////  SPECS  /////////////

describe('AppComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AppComponent).then(fixture => {
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
      });
    })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(AppComponent).then(fixture => {
        let h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
        expect(h1.innerText).toMatch(/[.\n]*/i, '<h1> should have text');
      });
    })));
});
