import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './services/index';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'register', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
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
