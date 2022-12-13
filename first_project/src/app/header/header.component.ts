import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';
import { StepperComponent } from '../stepper/stepper.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName: any
  email: any;
  fName: any
  lName: any
  onDestroy$ = new Subject<boolean>

  constructor(private dialog: MatDialog, private router: Router, private service: SampleserviceService) { }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
  ngOnInit() {
    this.email = localStorage.getItem('email')
    this.userName = this.email.split('.').join(' ').split('@', 1).join(' ')
    this.fName = ((this.userName.split(' ', 1))[0])[0]
    this.lName = ((this.userName.split(' ', 2))[1])[0]
  }

  addDetails() {
    const dialogRef = this.dialog.open(StepperComponent)

    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe(result => {

    })

  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }
  login() {
    this.router.navigate(['/mat-table'])
  }
  goto() {
    this.router.navigate(['/goshopping'])
  }
  wish() {
    this.router.navigate(['/wishlist'])
  }
  searchTool(val: any) {
    this.service.searchItem(val)

  }
}
