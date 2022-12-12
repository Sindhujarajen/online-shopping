import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Details } from '../model';
import { SampleserviceService } from '../sampleservice.service';


export interface PeriodicElement {
  itemName: string;
  no: string;
  cost: string;
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
  dataSource: Observable<Details[]> = of([]);

  constructor(private service: SampleserviceService) { }

  ngOnInit() {
    this.service.getDetails()
    this.dataSource = this.service.dataEvent$
      .pipe(map((code: any) => {
        return (code.filter((all: any) => all.selected))
      }))
  }

}
