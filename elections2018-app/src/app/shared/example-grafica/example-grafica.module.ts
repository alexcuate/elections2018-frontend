import { ExampleGraficaComponent } from './example-grafica.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AMaterialModule } from '../../../shared-material/material.module';
import { dnutChart} from './dnutChart/dnutChart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        ExampleGraficaComponent,
        dnutChart,
        
     
    ],
    exports: [
        ExampleGraficaComponent,
        dnutChart,
        
     
    ],
    imports: [
        CommonModule,
        FormsModule,
        AMaterialModule,
        ChartsModule,        
    ],
    providers: [ 
    ]
})

export class ExampleGraficaModule { 

}