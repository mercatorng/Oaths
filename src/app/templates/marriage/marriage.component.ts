import { Component, OnInit } from '@angular/core';
import { InstitutionService } from './../../services/institution.service';
import { User } from './../../models/user';
import { Institution } from 'src/app/models/institution';
import { FormGroup, FormControl } from '@angular/forms';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.scss']
})
export class MarriageComponent implements OnInit {
  currentUser: User;
  institution: Institution;
  marriageForm: FormGroup;
  constructor(
    private institutionService: InstitutionService,
    private documentService: DocumentService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
  }
  ngOnInit() {
    this.getInstitution();
    this.marriageForm= new FormGroup({
      id: new FormControl(0),
      husband: new FormControl (''),
      wife: new FormControl (''),
      witnessName: new FormControl(''),
      witnessCountry: new FormControl (''),
      address: new FormControl(''),
      witnessReligion: new FormControl(''),
      now: new FormControl(''),
      hn: new FormControl(''),
      wn: new FormControl(''),
      day: new FormControl(''),
      my: new FormControl(''),
      venue: new FormControl(''),
      date: new FormControl(''),
      institutionId: new FormControl(this.currentUser.institutionID),
      fromLanguage: new FormControl(''),
      toLanguage: new FormControl(''),
      interpreter: new FormControl(''),
      staffID: new FormControl(this.currentUser.id),
      relationship: new FormControl(''),
      courtName: new FormControl(this.currentUser.institution.name),
      amountPaid: new FormControl(''),
      tellerNumber: new FormControl('')
    })
  }

  getInstitution() {
    this.institutionService
      .getInstitutionById(this.currentUser.institutionID)
      .subscribe(res => {
        this.institution = res as Institution;
      });
  }

  save(){
    console.log(this.marriageForm.value)
    this.documentService.saveMarriageDeclaration(this.marriageForm.value).subscribe(data=>{
      console.log(data)
    },
      err=>{
        console.log(err)
    })
  }
}
