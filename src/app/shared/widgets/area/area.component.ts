import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"]
})
export class AreaComponent implements OnInit {
  @Input() data: any;
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: "Paid and Unpaid Documents"
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        valueSuffix: " millions"
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineColor: "#666666",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#666666"
          }
        }
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
