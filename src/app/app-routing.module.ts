import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home Component' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Component' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
