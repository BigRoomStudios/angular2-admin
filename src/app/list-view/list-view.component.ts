import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'list-view',
    templateUrl: './app/list-view/list-view.html',
    styleUrls: [ './app/list-view/list-view.css' ]
})

export class ListViewComponent implements OnInit {

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
