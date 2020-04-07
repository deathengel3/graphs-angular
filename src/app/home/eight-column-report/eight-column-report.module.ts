import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EightColumnReportComponent} from './eight-column-report.component';
import {RouterModule} from '@angular/router';
import {EightColumnReportRoutes} from './eight-column-report.routes';
import {MaterialModules} from '../../material-modules';
import {BodyModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EightColumnReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EightColumnReportRoutes),
    MaterialModules,
    GridModule,
    FormsModule,
    SharedModule,
    BodyModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EightColumnReportModule { }
