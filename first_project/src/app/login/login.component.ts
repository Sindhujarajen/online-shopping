import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleserviceService } from '../sampleservice.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  details: any;
  formdata: any;
  subscription$=new Subject<boolean> 

  constructor(private router: Router, private service: SampleserviceService) { }
  
  ngOnDestroy(): void {
    this.subscription$.next(true);
    this.subscription$.complete();
  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  loginPage(data: any) {
  
    this.service.loginPage(data).pipe((takeUntil(this.subscription$))).subscribe((code: any) => {

      localStorage.setItem('loginsucessfully', 'true')
      localStorage.setItem('email', data.email)

      this.router.navigate(['/mat-table'])

    })
  }
  
}



