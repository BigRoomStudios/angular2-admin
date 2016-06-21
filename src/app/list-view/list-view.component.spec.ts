/// <reference path="../../../typings/jasmine.d.ts" />

import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {ListViewComponent} from "./list-view.component";

describe('ListViewComponent Tests', () => {
  let listView:ListViewComponent;

  beforeEachProviders(() => [
    ListViewComponent
  ]);

  beforeEach(inject([ListViewComponent], l => {
    listView = l;
  }));
/*
  it('Should get 3', () => {
    listView.ngOnInit();
    expect(listView.squares.length).toBe(4);
  });

  it('Should be equal to ["one", "two", "three"]', () => {
    list-view.ngOnInit();
    expect(list-view.squares).toEqual(['one', 'two', 'three']);
  });*/

});
