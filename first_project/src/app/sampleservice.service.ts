import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Details, shopping } from './model';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
   
  private dataSubject$:Subject<Details[]>=new Subject();
  dataEvent$ = this.dataSubject$.asObservable();
  data:Details[]=[]

  API_URL="http://localhost:3000/Details";
  URL="http://localhost:3000/Shopping";
  Clothes_URL="http://localhost:3000/Clothes";
  Cosmetic_URL=" http://localhost:3000/Cosmetic";
  Grocery_URL=" http://localhost:3000/Grocery";

  constructor(private http:HttpClient) { }
 

  getDetails(){
     this.http.get(this.API_URL).subscribe(((val:any)=>{
          this.dataSubject$.next(val)
          this.data=val
        }))
   
  }

  createDetails(data: any):Observable<any> {
       console.log('---data---',data)
       return this.http.post(this.API_URL,data)
  }
  editDetails(data:any) {
      return this.http.put(`${this.API_URL}/${data.no}`,data);
  }
  deleteDetails(id:any){
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  getItem(id:any){
      return this.http.get(`${this.API_URL}/${id}`)
  }
  loginPage(data:any):Observable<any> {
      return this.http.post('https://reqres.in/api/login',data)
    
  }
  
  updatefavo(data:any){
     const newData={
     ...data,
     selected:!data.selected
     }
     return this.http.put(`${this.API_URL}/${data.id}`,newData)
  }
  searchItem(v:any){
     this.dataSubject$.next(this.data.filter((val:any)=>val.itemName.toLowerCase().includes(v.toLowerCase())))
  }
  getClothes():Observable<shopping[]>{
    return this.http.get<shopping[]>(this.Clothes_URL)
  }
  getCosmetic():Observable<shopping[]>{
    return this.http.get<shopping[]>(this.Cosmetic_URL)
  }
  getGrocery():Observable<shopping[]>{
    return this.http.get<shopping[]>(this.Grocery_URL)
  }
  
}



