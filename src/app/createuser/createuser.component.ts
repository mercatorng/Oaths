import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginValidators } from './../validators/login.validators';
import { RolesService } from '../services/roles.service';
import { Role } from '../models/role';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  roles: Role[];
  createUserForm;
  constructor(
    private modalService: NgbModal,
    private roleService: RolesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      phoneNo: new FormControl(''),
      role: new FormControl(),
      roleID: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        LoginValidators.shouldNotHaveSpaces
      ])
    });
    this.getRoles();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  get firstName() {
    return this.createUserForm.get('firstName');
  }

  get lastName() {
    return this.createUserForm.get('lastName');
  }

  get userName() {
    return this.createUserForm.get('userName');
  }

  get phoneNo() {
    return this.createUserForm.get('phoneNo');
  }

  get password() {
    return this.createUserForm.get('password');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  getRoles() {
    this.roleService.getRoleByInstitutionId(1).subscribe(data => {
      this.roles = data as Role[];
    },
      err => {
        console.log(err);
      });
  }

  createUser() {
    this.createUserForm.value.institutionID = 1;
    this.createUserForm.value.roleID=this.roles.find(x=> {return x.name==this.createUserForm.value.role}).id
    console.log(this.createUserForm.value);
    this.loginService.createUser(this.createUserForm.value).subscribe(data => {
      console.log(data);
    },
      err => {
        console.log(err);
    });
  }

}
