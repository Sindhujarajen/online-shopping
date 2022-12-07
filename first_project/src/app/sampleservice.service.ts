import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
   
  // fromService='this is from service'
  
  // private message=new BehaviorSubject<string>('default message')
  // getMessage=this.message.asObservable();

  private dataSubject$:Subject<Object>=new Subject();
  dataEvent$ = this.dataSubject$.asObservable();
  data:any

  API_URL="http://localhost:3000/Details";
  URL="http://localhost:3000/Shopping";
 
  constructor(private http:HttpClient,) { }
 

  getDetails(){
     this.http.get(this.API_URL).subscribe((val=>{
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
  getShopping(){
    return this.http.get(this.URL)
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
//  updateMessage(msg:string){
//      console.log('------',msg);
//      this.message.next(msg)
//  }
//  getSearchDetails(){
//   this.http.get(this.API_URL).subscribe((v=>{
//     this.dataSubject$.next(v)
//     this.data=v
//   }))
//  }
}



