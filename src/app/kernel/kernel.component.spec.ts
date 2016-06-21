/// <reference path="../../../typings/jasmine.d.ts" />

import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {KernelComponent} from "./kernel.component";

describe('KernelComponent Tests', () => {
  let list:KernelComponent;

  beforeEachProviders(() => [
    KernelComponent
  ]);

  beforeEach(inject([KernelComponent], l => {
    list = l;
  }));

});
