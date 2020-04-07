import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomeRoutes} from './welcome.routes';
import {WelcomeComponent} from './welcome.component';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(WelcomeRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
