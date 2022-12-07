import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-goshopping',
  templateUrl: './goshopping.component.html',
  styleUrls: ['./goshopping.component.css']
})
export class GoshoppingComponent implements OnInit {
  a: any
  cards: any;
  router: any;
  // dataSource: any;
  constructor(private service: SampleserviceService) { }
  ngOnInit() {
    this.service.getShopping().subscribe((o: any) => {
      this.cards = o
      console.log(this.cards);
    })
  }
  // logout(){
  //   this.router.navigate(['/login'])
  //   localStorage.clear()
  // }
  // login(){
  //   this.router.navigate(['/mat-table'])
  // }
  // goto(){
  //   this.router.navigate(['/goshopping'])
  // }
  // wish(){
  //   this.router.navigate(['/wishlist'])
  // }
}
