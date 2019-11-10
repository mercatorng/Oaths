import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Role } from '../models/role';
import { Privilege } from '../models/privilege';
import { RolesService } from '../services/roles.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  menus = [
    {name: 'Documents'},
    {name: 'Roles'},
    {name: 'Institution'},
    {name: 'Payment'},
    {name: 'Reports'},
    {name: 'Create Users'}
  ];

  fakeRoles = [
    {name:"Admin", id:1},
    {name:"Cashier", id:2},
    {name:"Registrar", id:3},
    {name:"Commissioner", id:4}
  ]
  role: Role;
  roleName: string;
  privilegeRead = new Array(this.menus.length);
  privilegeWrite = new Array(this.menus.length);
  privileges: Privilege[] = [];
  // formInvalid:boolean=false;
  showErrorMsg = false;
  roles: Role[];
  chosenRole;
  loading=true;
  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private modalService: NgbModal,
    private roleService: RolesService
              ) {}

  ngOnInit() {
    this.setPrivilegesToFalse()
    this.getRolesByInstitution()
  }

  

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  setPrivilegesToFalse() {
    this.privilegeRead.fill(false,0);
    this.privilegeWrite.fill(false,0);
  }

  onSave() {
    if (this.roleName) {
      // formInvalid=true
      this.showErrorMsg = false;
    } else {
      this.showErrorMsg = true;
    }
    if (this.roleName) {
      this.role = new Role;
      this.menus.forEach((menu, index) => {
      this.privileges.push({
        id: 0,
        institutionID: 1,
        name: menu.name,
        code: null,
        read: this.privilegeRead[index],
        write: this.privilegeWrite[index]
      })
      })
      this.role.institutionID = 1;
      this.role.name = this.roleName;
      this.role.privileges = this.privileges;
      console.log(this.role)
      this.roleService.saveRole(this.role).subscribe(data => {
        console.log(data);
        this.privileges = [];
        this.roleName = null;
        this.setPrivilegesToFalse();
      },
        err => {
        });
      }
  }

  getRolesByInstitution() {
    this.roleService.getRoleByInstitutionId(1).subscribe(data => {
      this.loading=false
      this.roles = <Role[]> data;
    },
      err => {
        console.log(err)
      });
  }

  editrole(role) {
    this.chosenRole = role;
  }

  updateRole() {
    this.roleService.updateRole(this.chosenRole).subscribe(data => {
      console.log(data)
    },
    err => {
      console.log(err)
    });
  }

  

}
