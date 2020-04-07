import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {ChartModule} from '@progress/kendo-angular-charts';
import {MaterialModules} from '../material-modules';
import { EightColumnReportComponent } from './eight-column-report/eight-column-report.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChartModule,
    MaterialModules
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
