import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentService } from '../services/document.service'
import { Payment } from '../models/payment';
import { FormGroup, FormControl } from '@angular/forms'
import { User } from '../models/user';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  id;
  documentType;
  url;
  marriage=false;
  name=false;
  age=false;
  general=false;
  oathform;
  showContent=false;
  documentImage=true;
  payment:Payment;
  paymentForm:FormGroup;
  currentUser:User

  constructor(
    private modalService: NgbModal,
    private documentService: DocumentService
  ) {
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'))
   }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      id: new FormControl(''),
      institutionID: new FormControl(this.currentUser.institutionID),
      amount:new FormControl(''),
      datePaid: new FormControl(''),
      userID: new FormControl(this.currentUser.id),
      reference: new FormControl(''),
      paymentCode: new FormGroup({
        id: new FormControl(''),
        institutionID: new FormControl(this.currentUser.institutionID),
        documentId: new FormControl(''),
        documentType: new FormControl(''),
        documentRef: new FormControl(''),
        payerName: new FormControl(''),
        isPaid: new FormControl('')
      })
    })
  }
  
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  searchDocument(){
    if(this.documentType=="Marriage Declaration"){
      this.url="Marriage/GetByID"
    }
    else if(this.documentType=="Age Declaration"){
      this.url="AgeDeclaration/GetByID"
    }
    else if(this.documentType=="Change of Name Declaration"){
      this.url="ChangeofName/GetByID"
    }
    else if(this.documentType=="General Declaration"){
      this.url="GeneralAffidavit/GetByID"
    }
    console.log(this.documentType)
    this.documentService.getMarriageAgeNameGeneralById(this.url,this.id).subscribe(data=>{
      this.oathform=<any>data
      this.documentImage=false
      if(this.documentType=="Marriage Declaration"){
        this.marriage=true
        this.age=this.name=this.general=false
      }
      else if(this.documentType=="Age Declaration"){
        this.age=true
        this.marriage=this.name=this.general=false
      }
      else if(this.documentType=="Change of Name Declaration"){
        this.name=true
        this.age=this.marriage=this.general=false
      }
      else if(this.documentType=="General Declaration"){
        this.general=true
        this.age=this.name=this.marriage=false
      }
      //console.log(data)
    },
      err=>{
        console.log(err)
      })
  }

  confirmPayment(){
    console.log(this.paymentForm.value)
  }

}
