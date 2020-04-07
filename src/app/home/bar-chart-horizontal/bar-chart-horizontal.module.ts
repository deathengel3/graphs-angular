import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarChartHorizontalComponent} from './bar-chart-horizontal.component';
import {RouterModule} from '@angular/router';
import {BarChartHorizontalRoutes} from './bar-chart-horizontal.routes';
import {ChartModule} from '@progress/kendo-angular-charts';
import {MaterialModules} from '../../material-modules';



@NgModule({
  declarations: [BarChartHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BarChartHorizontalRoutes),
    ChartModule,
    MaterialModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BarChartHorizontalModule { }
