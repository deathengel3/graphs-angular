import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import {MaterialModules} from './material-modules';
import {RouterModule} from '@angular/router';
import {GeneralRoutes} from './app.routing';
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';
import { GridModule } from '@progress/kendo-angular-grid';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModules,
    RouterModule.forRoot(GeneralRoutes, {useHash: false}),
    HomeModule,
    GridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
