import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'angular-2-admin'
})

@View({
  templateUrl: 'angular-2-admin.html'
})

export class Angular2Admin {

  constructor() {
    console.info('Angular2Admin Component Mounted Successfully');
  }

}
