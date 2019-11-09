import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RolesComponent } from './roles/roles.component';
import { AddrolesComponent } from './addroles/addroles.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { InstitutionComponent } from './institution/institution.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login Component' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Component' }
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    data: { title: 'Navigation Component' },
    children:[
      {
        path: 'roles',
        component: RolesComponent,
        data: { title: 'Roles Component' }
      },
      {
        path: 'addroles',
        component: AddrolesComponent,
        data: { title: 'Addroles Component' }
      },
      {
        path: 'createuser',
        component: CreateuserComponent,
        data: { title: 'Createuser Component' }
      },
      {
        path: 'institution',
        component: InstitutionComponent,
        data: { title: 'Institution Component' }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: { title: 'Reports Component' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
