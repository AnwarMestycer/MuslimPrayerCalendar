import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salat } from './salat';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalatService {
   today = new Date();

   date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  host = environment.hostApi;
  constructor(private _http: HttpClient) {}

  
  getSalet(): Observable<Salat[]> {
    return this._http.get<Salat[]>(this.host+`/one/:${this.date}`);
  }
  getSalatByName():Observable<Salat[]>{
    return this._http.get<Salat[]>(this.host+`/salat`)
  }
}
