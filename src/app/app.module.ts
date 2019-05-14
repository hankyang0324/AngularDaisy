import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HankAccordionModule } from 'hank-accordion';
import { HankDropdownModule } from 'hank-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PropFilterPipe } from './prop-filter.pipe';
import { DateInputComponent } from './date-input/date-input.component';
import { TestDirective } from './date-input/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PropFilterPipe,
    DateInputComponent,
    TestDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HankAccordionModule,
    HankDropdownModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
