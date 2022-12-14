import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router} from '@angular/router';
import { filter, Observable, of, Subject } from 'rxjs';
import { shopping } from '../model';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-goshopping',
  templateUrl: './goshopping.component.html',
  styleUrls: ['./goshopping.component.css']
})
export class GoshoppingComponent implements OnInit,OnDestroy {

  cards:Observable<shopping[]>=of([]);
  onDestroy$=new Subject<boolean>

  constructor(private service: SampleserviceService,private route:Router) {
   }
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
  ngOnInit() {
      this.route.events.pipe(filter(event=>event instanceof NavigationStart)).subscribe((routelink:any) => {
     
      if(routelink.url.includes('Clothes')){
        this.cards=this.service.getClothes()
         
         }
         else if(routelink.url.includes('Cosmetic')){
          this.cards=this.service.getCosmetic()
        }
        else if(routelink.url.includes('Grocery')){
          this.cards=this.service.getGrocery()
          
         }
      })
      
    }
  }
  
  
   
   
  

