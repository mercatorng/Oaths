import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentService } from '../services/document.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  affidavit: any;

  constructor(
    private documentService: DocumentService,
    private dialog: MatDialog,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }
  get search() {
    return this.searchForm.get('search');
  }

  openDialog(title, msg): void {
    this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: { title, msg }
    });
  }

  getDocument() {
    console.log(this.searchForm.value);
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.loading = true;
    this.documentService.getDocumentByRef(this.searchForm.value).subscribe(
      res => {
        this.affidavit = res;
        console.log(this.searchForm.value);
        this.openDialog('Court Affidavit', `Success`);
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.alertService.error(`Error: ${error.statustext}`);
        this.openDialog('Court Affidavit', `Failed ${error.statusText}`);
      }
    );
  }
}
