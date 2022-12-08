import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, find, map, Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';



export interface PeriodicElement {
  itemName: string;
  no: number;
  cost: Number;
  shippingAddress: string;
  expectedDelivery: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  displayedColumns: string[] = ['no', 'itemName', 'cost', 'shippingAddress', 'expectedDelivery'];
  dataSource: Observable<any> = of([{}]);
  router: any;

  constructor(private service: SampleserviceService) { }

  ngOnInit() {
    this.service.getDetails()
    this.dataSource = this.service.dataEvent$
      .pipe(map((code: any) => {
        // console.log('===x====', x)
        return (code.filter((all: any) => all.selected))
      }))
  }

}
