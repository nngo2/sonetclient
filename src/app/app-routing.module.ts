import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: UserDetailComponent },
  { path: '**', component: UserDetailComponent }
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
