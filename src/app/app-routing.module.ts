import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './services/index';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { PostHomeComponent } from './post/post-home/post-home.component';
import {ChatAppComponent} from './chat/chat-app/chat-app.component';
import {FriendsHomeComponent} from './friend/friends-home/friends-home.component';
import {ListFriendsComponent} from './friend/list-friends/list-friends.component';
import {AddFriendsComponent} from './friend/add-friends/add-friends.component';
import { PostsResolver } from './services/posts.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: PostHomeComponent, canActivate: [AuthGuard], resolve: {post: PostsResolver} },
  { path: 'register', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
  {path: 'chat', component: ChatAppComponent, canActivate: [AuthGuard]},
  {path: 'friends', component: FriendsHomeComponent, canActivate: [AuthGuard],
  children: [
    {path: 'listFriends', component: ListFriendsComponent},
    {path: 'addFriends', component: AddFriendsComponent}
  ]},
  { path: '**', component: LoginComponent, pathMatch: 'full' }
];

/**
 * re-export the Angular RouterModule by adding it to the module exports array.
 * By re-exporting the RouterModule here and importing AppRoutingModule in AppModule,
 * the components declared in AppModule will have access to router directives such as RouterLink and RouterOutlet.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
