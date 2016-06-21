/// <reference path="../../../typings/jasmine.d.ts" />

import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {NavigationComponent} from "./navigation.component";

describe('NavigationComponent Tests', () => {
  let navigation:NavigationComponent;

  beforeEachProviders(() => [
    NavigationComponent
  ]);

  beforeEach(inject([NavigationComponent], l => {
    navigation = l;
  }));

  it('Should get 3', () => {
    navigation.ngOnInit();
    expect(navigation.navItems.length).toBe(4);
  });

});
