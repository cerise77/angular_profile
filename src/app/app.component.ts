import { Component, OnInit, HostBinding } from '@angular/core';
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
    condition: boolean=true;
    newCourse : any = '';
    selectedValue:string; 
    selectedValueS:string; 

    constructor(private httpService:HttpService){
        this.myForm = new FormGroup({
            "name": new FormControl("", [Validators.required, Validators.pattern("^[zA-Z]+$")])
        });
    }

    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {this.tables = data});
    }

    submit(){
        this.myForm.controls['name'].enable();
        this.disableSelect = new FormControl(false);
        this.condition=!this.condition;
    }

    cancel(){
        this.newCourse = '';
        this.selectedValue = undefined;
        this.selectedValueS = undefined;
        this.favoriteHuman = null;
    }

}