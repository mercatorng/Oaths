import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarriageComponent } from './templates/marriage/marriage.component';
import { NameChangeComponent } from './templates/name-change/name-change.component';
import { GeneralFormComponent } from './templates/general-form/general-form.component';
import { AgeDeclarationComponent } from './templates/age-declaration/age-declaration.component';

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
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dash' }
      },
      {
        path: 'template',
        component:  AgeDeclarationComponent,
        data: { title: 'Age' }
      },
      {
        path: 'marriage',
        component:  MarriageComponent,
        data: { title: 'Dash' }
      },
      {
        path: 'change-of-name',
        component:  NameChangeComponent,
        data: { title: 'Dash' }
      },
      {
        path: 'general',
        component: GeneralFormComponent,
        data: { title: 'Dash' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
