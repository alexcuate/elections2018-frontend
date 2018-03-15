import { AMaterialModule } from './../../../shared-material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersusAnalysisComponent } from './versus-analysis/versus-analysis.component';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [
	{ path: '', component: VersusAnalysisComponent }
];

@NgModule({
	imports: [
		CommonModule,
		AMaterialModule,
	RouterModule.forChild(routes)
	],
	declarations: [VersusAnalysisComponent],
	exports: [
		RouterModule,
		AMaterialModule
	]
})
export class VersusAnalysisModule { }
