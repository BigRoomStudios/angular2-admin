import { Component, OnInit } from 'angular2/core';

import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
    selector: 'app',
    templateUrl: './app/kernel/kernel.html',
    styleUrls: [ './app/kernel/kernel.css' ],
    directives: [
      NavigationComponent,
      DashboardComponent
    ]
})

export class KernelComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
