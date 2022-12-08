import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { SampleserviceService } from '../sampleservice.service';
import { StepperComponent } from '../stepper/stepper.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  a: any
  email: any;
  fName:any
  lName:any

 
 // dataSource: any;
  constructor(private dialog:MatDialog,private router:Router,private service:SampleserviceService) { }
  ngOnInit(){
    this.email=localStorage.getItem('email')
    this.a=this.email.split('.').join(' ').split('@',1).join(' ')
    this.fName= ((this.a.split(' ',1))[0])[0]
    this.lName=((this.a.split(' ',2))[1])[0]
  }
  
  
addDetails(){
  const dialogRef=this.dialog.open(StepperComponent)

  dialogRef.afterClosed().subscribe(result =>{
    // console.log('Dialog result',`${result}`);
    
  })

}

logout(){
  this.router.navigate(['/login'])
  localStorage.clear()
}
login(){
  this.router.navigate(['/mat-table'])
}
goto(){
  this.router.navigate(['/goshopping'])
}
wish(){
  this.router.navigate(['/wishlist'])
}
searchTool(val:any){
  // console.log('------',val);
  this.service.searchItem(val)
  
}

}
