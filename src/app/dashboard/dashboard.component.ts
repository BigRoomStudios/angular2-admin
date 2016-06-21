import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    styleUrls: [ './app/dashboard/dashboard.css' ]
})

export class DashboardComponent implements OnInit {

  appForm:any;
  items:Array<string>;

  constructor() {

  }

  ngOnInit() {

  }

  notify(event) {

  }

}
