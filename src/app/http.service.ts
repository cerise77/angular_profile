import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Table} from './table';

@Injectable()
export class HttpService {

    constructor(private http:HttpClient){}

    getData():Observable<Table[]>{
        return this.http.get("assets/table.json").pipe(
            map((data)=>{
                let userData = data["items"];
                return userData.map((user:any) => {
                    return {id: user.id, country: user.country, language: user.language};
                })
            })
        )
    }

}