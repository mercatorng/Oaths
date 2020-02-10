import { Component, OnInit, Input } from '@angular/core';
import { Institution } from '../../../models/institution';
import { InstitutionService } from '../../../services/institution.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-age-view',
  templateUrl: './age-view.component.html',
  styleUrls: ['./age-view.component.scss']
})
export class AgeViewComponent implements OnInit {
  @Input() affidavit:any

  institution:Institution
  currentUser:User

  constructor(
    private institutionService:InstitutionService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
  }

  ngOnInit() {
    this.getInstitution()
  }

  getInstitution() {
    this.institutionService
      .getInstitutionById(this.currentUser.institutionID)
      .subscribe(res => {
        this.institution = res as Institution;
      });
  }

}
