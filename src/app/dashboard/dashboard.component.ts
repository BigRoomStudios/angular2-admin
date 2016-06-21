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
        link: '/list-items'
      },
      {
        text: 'Create Item',
        icon: 'plus',
        link: '/create-item'
      },
      {
        text: 'Charts',
        icon: 'pie-chart',
        link: '/charts'
      },
      {
        text: 'Settings',
        icon: 'cog'
        ,
        link: '/settings'
      }
    ]
  }

  notify(event) {

  }

}
