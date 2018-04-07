import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    require('../../node_modules/jquery/dist/jquery.js');
    require('../../node_modules/popper.js/dist/popper.js');
    require('../../node_modules/bootstrap/dist/js/bootstrap.js');
    require('../../node_modules/select2/dist/js/select2.js');
  }
}
