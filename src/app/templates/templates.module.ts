import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarriageComponent } from './marriage/marriage.component';
import { NameChangeComponent } from './name-change/name-change.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { AgeDeclarationComponent } from './age-declaration/age-declaration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MarriageComponent,
    NameChangeComponent,
    GeneralFormComponent,
    AgeDeclarationComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class TemplatesModule {}
