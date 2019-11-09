import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplatesModule } from './templates/templates.module';
=======
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
>>>>>>> e1be860ddea588177c70468efeda640479ce06af

import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { RolesComponent } from './roles/roles.component';
import { AddrolesComponent } from './addroles/addroles.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { InstitutionComponent } from './institution/institution.component';
import { ReportsComponent } from './reports/reports.component';
>>>>>>> e1be860ddea588177c70468efeda640479ce06af

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
<<<<<<< HEAD
    DashboardComponent
=======
    RolesComponent,
    AddrolesComponent,
    CreateuserComponent,
    InstitutionComponent,
    ReportsComponent
>>>>>>> e1be860ddea588177c70468efeda640479ce06af
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
<<<<<<< HEAD
    TemplatesModule
=======
    ChartsModule
>>>>>>> e1be860ddea588177c70468efeda640479ce06af
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
