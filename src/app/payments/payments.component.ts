import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentService } from '../services/document.service';
import { Payment } from '../models/payment';
import { FormGroup, FormControl } from '@angular/forms';
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
  marriage = false;
  name = false;
  age = false;
  general = false;
  oathform;
  showContent = false;
  documentImage = true;
  payment: Payment;
  paymentForm: FormGroup;
  currentUser: User;
  loading = false;
  refNo;

  constructor(
    private modalService: NgbModal,
    private documentService: DocumentService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      id: new FormControl(''),
      institutionID: new FormControl(this.currentUser.institutionID),
      amount: new FormControl(),
      method: new FormControl(''),
      datePaid: new FormControl(Date.now()),
      accountId: new FormControl(''),
      userID: new FormControl(this.currentUser.id),
      reference: new FormControl(''),
      paymentCodeID: new FormControl(''),
      paymentCode: new FormGroup({
        id: new FormControl(''),
        institutionID: new FormControl(this.currentUser.institutionID),
        documentId: new FormControl(''),
        documentType: new FormControl(''),
        documentRef: new FormControl(''),
        payerName: new FormControl(),
        isPaid: new FormControl(''),
        dateGenerated: new FormControl(Date.now())
      })
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  searchDocument() {
    this.marriage = false;
    this.loading = true;
    this.documentImage = false;
    this.documentService.getDocumentByRef(this.refNo).subscribe(
      data => {
        this.oathform = data as any;
        this.documentImage = false;
        this.loading = false;
        this.marriage = true;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  confirmPayment() {
    if (
      this.paymentForm.value.amount == this.oathform.amountPaid ||
      this.paymentForm.value.amount > this.oathform.amountPaid
    ) {
      this.paymentForm.value.paymentCode.isPaid = true;
    }
    this.paymentForm.value.paymentCode.documentRef = this.oathform.documentRef;
    this.paymentForm.value.paymentCode.documentId = this.oathform.id;
    console.log(this.paymentForm.value);
  }
}

// searchDocument(){
//   this.loading=true
//   this.documentImage=false
//   this.age=this.marriage=this.name=this.general=false
//   if(this.documentType=="Marriage Declaration"){
//     this.url="Marriage/GetByID"
//   }
//   else if(this.documentType=="Age Declaration"){
//     this.url="AgeDeclaration/GetByID"
//   }
//   else if(this.documentType=="Change of Name Declaration"){
//     this.url="ChangeofName/GetByID"
//   }
//   else if(this.documentType=="General Declaration"){
//     this.url="GeneralAffidavit/GetByID"
//   }

//   this.documentService.getMarriageAgeNameGeneralById(this.url,this.id).subscribe(data=>{
//     this.oathform=<any>data
//     this.documentImage=false
//     this.loading=false
//     if(this.documentType=="Marriage Declaration"){
//       this.marriage=true
//       this.age=this.name=this.general=false
//     }
//     else if(this.documentType=="Age Declaration"){
//       this.age=true
//       this.marriage=this.name=this.general=false
//     }
//     else if(this.documentType=="Change of Name Declaration"){
//       this.name=true
//       this.age=this.marriage=this.general=false
//     }
//     else if(this.documentType=="General Declaration"){
//       this.general=true
//       this.age=this.name=this.marriage=false
//     }
//     //console.log(data)
//   },
//     err=>{
//       console.log(err)
//     })
// }

// {
//   "address": "FEDERAL CAPITAL TERRITORY, ABUJA",
// "age": "18",
// "amountPaid": 1000,
// "birthLocalGovt": "ado odo ota",
// "birthPlace": "agbara",
// "birthState": "ogun",
// "courtName": "high court maitama",
// "date": "2019-11-11",
// "dateGenerated": "",
// "datePaid": "",
// "dateofBirth": "october 2010",
// "dayOfBirth": "8",
// "documentName": "",
// "documentRef": "",
// "fromLanguage": "english",
// "id": 0,
// "institutionId": 1,
// "interpreter": "adigun",
// "isPaid": "",
// "name": "Adigun Ibrahim",
// "presentDay": "18",
// "presentMonthYear": "october 2019",
// "registeredLocalLGovt": "ado odo ota",
// "registeredState": "ogun state nigeria",
// "relationship": "father",
// "relativeName": "adigun mary",
// "relativeName2": "adigun mary",
// "staffId": 5,
// "tellerNumber": "12345",
// "toLanguage": "hausa"
// }
