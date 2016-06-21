import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    styleUrls: [ './app/dashboard/dashboard.css' ]
})

export class DashboardComponent implements OnInit {

  squares:Array<Object>;

  constructor() {

  }

  ngOnInit() {
    this.squares =[
      {
        text: 'List Items',
        icon: 'list',
        url: '/list-items'
      },
      {
        text: 'Create Item',
        icon: 'plus',
        url: '/create-item'
      },
      {
        text: 'Charts',
        icon: 'pie-chart',
        url: '/charts'
      },
      {
        text: 'Settings',
        icon: 'cog'
        ,
        url: '/settings'
      }
    ];
  }

  notify(event) {

  }

}
