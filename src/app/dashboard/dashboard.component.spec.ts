/// <reference path="../../../typings/jasmine.d.ts" />

import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {DashboardComponent} from "./dashboard.component";

describe('DashboardComponent Tests', () => {
  let dashboard:DashboardComponent;

  beforeEachProviders(() => [
    DashboardComponent
  ]);

  beforeEach(inject([DashboardComponent], l => {
    dashboard = l;
  }));

  it('Should get 3', () => {
    dashboard.ngOnInit();
    expect(dashboard.squares.length).toBe(4);
  });

  /*it('Should be equal to ["one", "two", "three"]', () => {
    dashboard.ngOnInit();
    expect(dashboard.squares).toEqual(['one', 'two', 'three']);
  });*/

});
