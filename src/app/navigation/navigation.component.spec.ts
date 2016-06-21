/// <reference path="../../../typings/jasmine.d.ts" />

import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {NavigationComponent} from "./navigation.component";

describe('NavigationComponent Tests', () => {
  let list:NavigationComponent;

  beforeEachProviders(() => [
    NavigationComponent
  ]);

  beforeEach(inject([NavigationComponent], l => {
    list = l;
  }));

  it('Should get 3', () => {
    list.ngOnInit();
    expect(list.items.length).toBe(3);
  });

  it('Should be equal to ["one", "two", "three"]', () => {
    list.ngOnInit();
    expect(list.items).toEqual(['one', 'two', 'three']);
  });
});
