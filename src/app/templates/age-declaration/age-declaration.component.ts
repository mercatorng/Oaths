import { Component, OnInit, Inject } from '@angular/core';
import { InstitutionService } from './../../services/institution.service';
import { User } from './../../models/user';
import { Institution } from 'src/app/models/institution';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatDialogComponent } from './../../mat-dialog/mat-dialog.component';
import { DocumentService } from '../../services/document.service';
import { ToastService } from './../../services/toast.service';
import { AlertService } from 'src/app/services/alert.service';
import { interval as observableInterval } from 'rxjs';
import { takeWhile, scan, tap } from 'rxjs/operators';
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
  loading = false;

  constructor(
    private institutionService: InstitutionService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private documentService: DocumentService,
    public toastService: ToastService,
    private alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
  }

  ngOnInit() {
    this.getInstitution();
    this.ageForm = this.formBuilder.group({
      id: [0],
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

      date: ['2019-11-11T16:47:37.627Z', Validators.required],
      courtName: ['', Validators.required],
      fromLanguage: ['', Validators.required],
      toLanguage: ['', Validators.required],
      interpreter: ['', Validators.required],
      amountPaid: ['', Validators.required],
      tellerNumber: [''],
      presentDay: ['', Validators.required],
      presentMonthYear: ['', Validators.required],
      // documentRef:[''],
      // isPaid: [''],
      // dateGenerated: [''],
      // datePaid: [''],
      // documentName: ['']
    });
  }

  get f() {
    return this.ageForm.controls;
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
      return;
    }
    this.loading = true;
    const obj = { ...this.ageForm.value };
    obj.staffId = this.currentUser.id;
    obj.institutionId = this.currentUser.institutionID;
    console.log(obj)
    this.documentService.saveAgeDeclaration(obj).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.openDialog('Declaration of Age', `Saved Succesfully`);
        this.toastService.show('Saved Succesfully', {
          classname: 'bg-success text-light',
          delay: 10000,
          autohide: true,
          headertext: 'Declaration of Age'
        });
        this.alertService.success('Success');
      },
      error => {
        console.log(error);
        this.loading = false;
        this.toastService.show(`${error.statusText}`, {
          classname: 'bg-danger text-light',
          delay: 2000,
          autohide: true,
          headertext: 'Error!!!'
        });
      }
    );
  }
  scrollToTop(el) {
    const duration = 600;
    const interval = 5;
    const move = (el.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, el.scrollTop),
        tap(position => (el.scrollTop = position)),
        takeWhile(val => val > 0)
      )
      .subscribe();
  }

  reset() {
    this.submitted = false;
    this.ageForm.reset();
  }

  openDialog(title, msg): void {
    this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: { title, msg }
    });
  }

  findInvalidControlsRecursive(
    formToInvestigate: FormGroup | FormArray
  ): string[] {
    const invalidControls: string[] = [];
    const recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        if (control.invalid) {
          invalidControls.push(field);
        }
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    };
    recursiveFunc(formToInvestigate);
    console.log(invalidControls);
    return invalidControls;
  }
}



