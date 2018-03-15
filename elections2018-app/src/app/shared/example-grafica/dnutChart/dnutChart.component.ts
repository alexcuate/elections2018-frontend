import { Component, EventEmitter } from '@angular/core';
 
@Component({
    selector: 'dnutChart',
    templateUrl: 'dnutChart.component.html'
   })
   export class dnutChart {
    // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}