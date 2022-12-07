import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { SampleserviceService } from '../sampleservice.service';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  details: any;
  
  formdata:any
  constructor( private router: Router, private service:SampleserviceService){}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  
  loginPage(data:any){
    console.log(',,,', data);
    
    this.service.loginPage(data).subscribe((m:any)=>{

      localStorage.setItem('loginsucessfully','true')
      localStorage.setItem('email',data.email)
    
      this.router.navigate(['/mat-table'])
      
    })
    }
    // logout(){
    //   this.router.navigate(['/login'])
    //   localStorage.clear()
    // }
    // goto(){
    //   this.router.navigate(['/goshopping'])
    // }
    // login(){
    //   this.router.navigate(['/mat-table'])
    // }
    // wish(){
    //   this.router.navigate(['/wishlist'])
    // }
    
    
  }

