import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RangeBarChartComponent} from './range-bar-chart.component';
import {RouterModule} from '@angular/router';
import {RangeBarChartRoutes} from './range-bar-chart.routes';
import {ChartModule} from '@progress/kendo-angular-charts';
import {MaterialModules} from '../../material-modules';



@NgModule({
  declarations: [RangeBarChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RangeBarChartRoutes),
    ChartModule,
    MaterialModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RangeBarChartModule { }
