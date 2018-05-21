import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoNet';
  @select('login') isLoggedIn$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

}
