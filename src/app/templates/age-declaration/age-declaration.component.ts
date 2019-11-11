import { Component, OnInit, Inject } from '@angular/core';
import { InstitutionService } from './../../services/institution.service';
import { User } from './../../models/user';
import { Institution } from 'src/app/models/institution';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatDialogComponent } from './../../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-age-declaration',
  templateUrl: './age-declaration.component.html',
  styleUrls: ['./age-declaration.component.scss']
})
export class AgeDeclarationComponent implements OnInit {
  currentUser: User;
  institution: Institution;
  ageForm: FormGroup;
  submitted = false;

  constructor(
    private institutionService: InstitutionService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
  }

  ngOnInit() {
    this.getInstitution();
    this.ageForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      age: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(3)]
      ],
      dateofBirth: ['', Validators.required],
      dayOfBirth: ['', Validators.required],
      relationship: ['', Validators.required],
      relativeName: ['', Validators.required],
      relativeName2: ['', Validators.required],
      birthPlace: ['', Validators.required],
      birthState: ['', Validators.required],
      birthLocalGovt: ['', Validators.required],
      registeredLocalLGovt: ['', Validators.required],
      registeredState: ['', Validators.required],
      registeredCountry: ['', Validators.required],
      date: ['', Validators.required],
      courtName: ['', Validators.required],
      fromLanguage: ['', Validators.required],
      toLanguage: ['', Validators.required],
      interpreter: ['', Validators.required],
      amountPaid: ['', Validators.required],
      tellerNumber: ['', Validators.required],
      presentDay: ['', Validators.required],
      presentMonthYear: ['', Validators.required]
    });
  }

  get f() {
    return this.ageForm.controls;
  }

  get name() {
    return this.ageForm.get('name');
  }
  get address() {
    return this.ageForm.get('address');
  }
  get age() {
    return this.ageForm.get('age');
  }
  get dob() {
    return this.ageForm.get('dateofBirth');
  }
  getInstitution() {
    this.institutionService
      .getInstitutionById(this.currentUser.institutionID)
      .subscribe(res => {
        this.institution = res as Institution;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.ageForm.invalid) {
      console.log(this.ageForm);
      return;
    }
    console.log(this.ageForm.value);
    this.openDialog();
  }

  reset() {
    this.submitted = false;
    this.ageForm.reset();
  }

  openDialog(): void {
    this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: { title: 'Save Success', msg: 'Succesful' }
    });
  }
}
