import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AppComponent }   from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './http.service';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 



@NgModule({
    imports:      [ BrowserModule, FormsModule, CommonModule, BrowserAnimationsModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule, HttpClientModule, MatRadioModule, MatDatepickerModule ],
    declarations: [ AppComponent ],
    providers: [HttpService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }