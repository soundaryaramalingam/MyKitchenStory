import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kitchen } from './kitchen';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  private url="http://localhost:8088/"
  constructor(private http:HttpClient) { }
  getkitchen():Observable<Kitchen[]>{
    return this.http.get<Kitchen[]>(`${this.url}listkitchen`);
  }
  deletekitchen(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}deletekitchen/${id}`)
  }
  save(kitchen:any):Observable<any>{
    return this.http.post(`${this.url}addkitchen`,kitchen);
  }
  getkitchenById(id: number): Observable<Kitchen>{
    console.log("entered get kitchen by id");
    return this.http.get<Kitchen>(`${this.url}${id}`)
  }
  updatekitchen(id: number ,Kitchen: any): Observable<any>{
    console.log("entreed url");
    return this.http.post<any>(`${this.url}updatekitchen/${id}`, Kitchen)
  }
  saveorder(order:any):Observable<any>{
    
    
    return this.http.post(`${this.url}order`,order);
}

}
