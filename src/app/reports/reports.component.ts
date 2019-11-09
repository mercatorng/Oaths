import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() {}

  displayedColumns: string[] = ['id', 'type', 'status', 'registrar', 'date', ];

  documents = [
    {
      id: 'FMH/11111',
      type: 'Marriage',
      date: '01/01/02',
      status: 'paid',
      registrar: 'Gbolahan'
    },
    {
      id: 'FMH/11344',
      type: 'Birth',
      date: '01/01/02',
      status: 'unpaid',
      registrar: 'Gbolahan'
    },
    {
      id: 'FMH/78811',
      type: 'Birth',
      date: '01/01/02',
      status: 'paid',
      registrar: 'Molina'
    },
    {
      id: 'FMH/11111',
      type: 'Marriage',
      date: '01/01/02',
      status: 'paid',
      registrar: 'Gbolahan'
    }
  ];

  public doughnutChartLabels = ['Total Paid', 'Total Unpaid'];
  public doughnutChartData = [14, 18];
  public doughnutChartType = 'doughnut';

  ngOnInit() {}





}

