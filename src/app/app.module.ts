import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MdAutocompleteModule, MdCardModule, MdInputModule, MdToolbarModule} from "@angular/material";
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FilterPipe } from './filter.pipe';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
