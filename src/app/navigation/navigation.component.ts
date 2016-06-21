import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.html',
    styleUrls: [ './app/navigation/navigation.css' ]
})

export class NavigationComponent implements OnInit {

  appForm:any;
  items:Array<string>;

  constructor() {

  }

  ngOnInit() {

  }

  notify(event) {

  }

}
