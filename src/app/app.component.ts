import { Component } from '@angular/core';

import styleVars from '../styles.scss';
import otherStyleVars from './app.component.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'icss-import-test-angular';

  constructor() {
    console.log(styleVars);
    console.log(styleVars.testVar1);
    console.log(otherStyleVars);
    console.log(otherStyleVars.testVar3);
  }
}
