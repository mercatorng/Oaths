import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../services/institution.service';
import { Institution } from '../models/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {

  disableEdit=true;
  institution:Institution;
  loading=true;

  constructor(
    private institutionService: InstitutionService
  ) { }

  ngOnInit() {
    this.getInstitutionById()
  }

  getInstitutionById(){
    this.institutionService.getInstitutionById(1).subscribe(data=>{
      this.institution=<Institution>data
      this.loading=false
    },
      err=>{
        console.log(err)
  })
  }

  editInstitution(){
    this.disableEdit=!this.disableEdit
  }

  updateInstitution(){
    console.log(this.institution)
    this.institutionService.updateInstitution(this.institution).subscribe(data=>{
      console.log(data)
    },
      err=>{
        console.log(err)
      })
  }

}
