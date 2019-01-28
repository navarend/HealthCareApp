import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnInit {
  @Input() doughnutChartLabels:string[];
  @Input() doughnutChartData:number[];
  @Input() doughnutChartType:string;
  @Input() doughnutChartTitle:string;

  constructor() { }

  ngOnInit() {

  }

  // events
    public chartClicked(e:any):void {
       console.log(e);
     }

     public chartHovered(e:any):void {
       console.log(e);
     }

}
