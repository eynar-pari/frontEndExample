import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BaseRequestOptions, HttpModule, RequestOptions, Headers} from '@angular/http';
import { AppComponent } from './app.component';
import { LibroService } from "./services/libro.service";
import { LibroComponent } from "./libro.component";

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }





