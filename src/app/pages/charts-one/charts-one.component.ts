import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-one',
  templateUrl: './charts-one.component.html',
  styles: []
})
export class ChartsOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  charts: any = {
    'chart1': {
      'labels': ['Beans', 'Butter', 'Beacon'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'legend': 'The bread eats with'
    },
    'chart2': {
      'labels': ['Men', 'Women'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'legend': 'Interview'
    },
    'chart3': {
      'labels': ['Yes', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'legend': 'Do they like beans?'
    },
    'chart4': {
      'labels': ['No', 'Yes'],
      'data':  [85, 15],
      'type': 'doughnut',
      'legend': 'What are you favorite food?'
    },
  };
}
