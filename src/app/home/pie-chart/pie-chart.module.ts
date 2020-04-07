import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PieChartRoutes} from './pie-chart.routes';
import {PieChartComponent} from './pie-chart.component';
import {MaterialModules} from '../../material-modules';
import {ChartModule} from '@progress/kendo-angular-charts';



@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PieChartRoutes),
    ChartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PieChartModule { }
