import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PredictionService } from './prediction.service';
import { BrowserModule } from '@angular/platform-browser'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatSlideToggleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
