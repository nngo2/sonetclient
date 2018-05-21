import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { UserService, AuthService, AuthGuard, JwtInterceptor} from './services/index';
import { UserActions } from './store/index';
import { store, IAppState } from './store/index';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    NgReduxModule,
    UserModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    UserActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
