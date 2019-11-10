import { Component, OnInit } from '@angular/core';
import { InstitutionService } from './../../services/institution.service';
import { User } from './../../models/user';
import { Institution } from 'src/app/models/institution';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
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
      relationship: ['', Validators.required],
      relativeName: ['', Validators.required],
      birthStreet: ['', Validators.required],
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
      tellerNumber: ['', Validators.required]
    });
    
  }

  get f() {
    return this.ageForm.controls;
  }
  
  get name() { return this.ageForm.get('name'); }
  get address() { return this.ageForm.get('address'); }
  get age() { return this.ageForm.get('age'); }
  get dob() { return this.ageForm.get('dateofBirth'); }
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
      return;
    }
  }

  reset() {
    this.submitted = false;
    this.ageForm.reset();
  }
}
