import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentService } from '../services/document.service'
import { Payment } from '../models/payment';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { PaymentService } from '../services/payment.service';
import Swal from 'sweetalert2'

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
  currentUser:User;
  loading=false;
  refNo;
  payerName;

  constructor(
    private modalService: NgbModal,
    private documentService: DocumentService,
    private paymentService: PaymentService
  ) {
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'))
   }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      id: new FormControl(0),
      institutionID: new FormControl(this.currentUser.institutionID),
      amount:new FormControl(),
      method: new FormControl('Bank'),
      accountID: new FormControl('1'),
      userID: new FormControl(this.currentUser.id),
      reference: new FormControl(''),
      documentRef: new FormControl(''),
      documentType: new FormControl(1),
      documentID: new FormControl(''),
      payerName: new FormControl('')
    })
  }
  
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  
  searchDocument(){
    this.marriage=false
    this.loading=true
    this.documentImage=false
    this.documentService.getDocumentByRef(this.refNo).subscribe(data=>{
      this.oathform=<any>data
      this.documentImage=false
      this.loading=false
      this.marriage=true
    },
      err=>{
        console.log(err)
      })
  }

  confirmPayment(){
    this.paymentForm.value.documentRef=this.oathform.documentRef
    this.paymentForm.value.documentID=this.oathform.id
    this.paymentForm.value.payerName=this.oathform.name
    //console.log(this.paymentForm.value)
    this.paymentService.savePayment(this.paymentForm.value).subscribe(data=>{
      this.modalService.dismissAll()
      Swal.fire('Payment Succesful')
    },
      err=>{
      console.log(err)
    })
    
  }

}






// this.ageForm = this.formBuilder.group({
//   id: [0],
//   name: ['', Validators.required],
//   address: ['', Validators.required],
//   age: [
//     '',
//     [Validators.required, Validators.minLength(1), Validators.maxLength(3)]
//   ],
//   dateofBirth: ['', Validators.required],
//   dayOfBirth: ['', Validators.required],
//   relationship: ['', Validators.required],
//   relativeName: ['', Validators.required],
//   relativeName2: ['', Validators.required],
//   birthPlace: ['', Validators.required],
//   birthState: ['', Validators.required],
//   birthLocalGovt: ['', Validators.required],
//   registeredLocalLGovt: ['', Validators.required],
//   registeredState: ['', Validators.required],

//   date: ['2019-11-11T16:47:37.627Z', Validators.required],
//   courtName: ['', Validators.required],
//   fromLanguage: ['', Validators.required],
//   toLanguage: ['', Validators.required],
//   interpreter: ['', Validators.required],
//   amountPaid: ['', Validators.required],
//   tellerNumber: [''],
//   presentDay: ['', Validators.required],
//   presentMonthYear: ['', Validators.required],
//   // documentRef:[''],
//   // isPaid: [''],
//   // dateGenerated: [''],
//   // datePaid: [''],
//   // documentName: ['']
// });
