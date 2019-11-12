import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user";
import { Institution } from "src/app/models/institution";
import { InstitutionService } from "src/app/services/institution.service";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-age-affidavit",
  templateUrl: "./age-affidavit.component.html",
  styleUrls: ["./age-affidavit.component.scss"]
})
export class AgeAffidavitComponent implements OnInit {
  @Input() affidavit: any;
  currentUser: User;
  institution: Institution;
  constructor(private institutionService: InstitutionService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser")) as User;
  }

  ngOnInit() {
    this.getInstitution();
  }

  getInstitution() {
    this.institutionService
      .getInstitutionById(this.currentUser.institutionID)
      .subscribe(res => {
        this.institution = res as Institution;
      });
  }
}
