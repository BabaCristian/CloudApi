import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WiskyService {

  private URL: string = "http://localhost:51841/api/whisky";
  constructor(private http: HttpClient) { }

//get all
  getAllwhiskies() {
    return  this.http.get<Whisky>(this.URL)
   }

//get by id 
getwhisky(id:string){
  return this.http.get<Whisky>(this.URL+"/"+id)
}
//delete  by id 
deleteitem(id:string){
  return this.http.delete<Whisky>(this.URL+"/"+id)
}
//update by id 
Updateitem(id:string)
{
  // return this.http.post<Whisky>(this.URL+"/"+id)
}
//make new whisky

Searchname(name:string){
  http://localhost:51841/api/whisky?name=
return  this.http.get<Whisky>(this.URL+"?name="+name)
}

// Paging
Paging(pagenr : number){
  return  this.http.get<Whisky>(this.URL+"?page="+pagenr)
}


  
 }

 export interface Whisky {
  id: number;
  price: string;
  name: string;
  rating: number;
  pictureurl: string;
}





