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
import { ChartsModule } from 'ng2-charts';

import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { AddrolesComponent } from './addroles/addroles.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { InstitutionComponent } from './institution/institution.component';
import { ReportsComponent } from './reports/reports.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    RolesComponent,
    AddrolesComponent,
    CreateuserComponent,
    InstitutionComponent,
    ReportsComponent
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
    ChartsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
