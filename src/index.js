import {Component, View, bootstrap} from 'angular2/angular2';
import {Angular2Admin} from 'angular-2-admin';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2Admin],
  template: `
    <angular-2-admin></angular-2-admin>
  `
})

class Main {

}

bootstrap(Main);
