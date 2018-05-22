import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { UserService, AuthService, AuthGuard, JwtInterceptor, StateService, PostService, FileUploadService} from './services/index';
import { UserActions, PostActions } from './store/index';
import { store, IAppState } from './store/index';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { PrivateChatComponent } from './chat/private-chat/private-chat.component';
import { ChatAppComponent } from './chat/chat-app/chat-app.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateChatComponent,
    ChatAppComponent,
    ChatListComponent
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
    UserModule,
    PostModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    UserActions,
    StateService,
    PostService,
    PostActions,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.provideStore(store);
  }
}
