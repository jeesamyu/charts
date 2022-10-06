import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './newchart/charts/charts.component';
import { HighchartComponent } from './highchart/highchart/highchart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    HighchartComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
