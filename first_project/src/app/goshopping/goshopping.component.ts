import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-goshopping',
  templateUrl: './goshopping.component.html',
  styleUrls: ['./goshopping.component.css']
})
export class GoshoppingComponent implements OnInit {

  cards: any;

  // dataSource: any;
  constructor(private service: SampleserviceService) { }
  ngOnInit() {
    this.service.getShopping().subscribe((code: any) => {
      this.cards = code
      // console.log(this.cards);
    })
  }

}
