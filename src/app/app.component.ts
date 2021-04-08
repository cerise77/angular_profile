import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service';
import {Table} from './table';

     
@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./html/app.component.scss']
})
export class AppComponent implements OnInit { 

    myForm : FormGroup;
    tables: Table[]=[];
    favoriteHuman: string;
    humans: string[] = ['Male', 'Female', 'Other'];
    disableSelect = new FormControl(true);

    constructor(private httpService:HttpService){
        this.myForm = new FormGroup({
            "name": new FormControl("", [Validators.required, Validators.pattern("^[zA-Z]+$")])
        });
    }

    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {this.tables = data});
    }

    submit(){
        this.myForm.controls['name'].enable()
        this.disableSelect = new FormControl(false);
    }

}