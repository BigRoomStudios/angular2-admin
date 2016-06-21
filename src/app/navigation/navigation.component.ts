import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.html',
    styleUrls: [ './app/navigation/navigation.css' ]
})

export class NavigationComponent implements OnInit {

  navItems:Array<Object>;

  constructor() {

  }

  ngOnInit() {
    this.navItems =[
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
        icon: 'cog',
        url: '/settings'
      }
    ];
  }

  notify(event) {

  }

}
