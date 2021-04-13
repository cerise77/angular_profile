import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './http.service';

     
@Component({
    selector: 'but-app',
    template: `<button class="btn btn-default" formControlName="butSave" [attr.disabled]="true">Save</button>
                <button class="btn btn-default">Cancel</button>`,
})
export class ButComponent  { 


    constructor(){

    }


}