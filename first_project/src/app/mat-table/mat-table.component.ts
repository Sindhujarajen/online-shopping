import { Component, Inject, OnInit } from '@angular/core';
import { elementAt, Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



export interface PeriodicElement {
  itemName: string;
  no: number;
  cost: Number;
  shippingAddress: string;
  expectedDelivery: string;
}

// const EXAMPLE_DATA: PeriodicElement[] = [
//   {no: 1, itemName: 'agfd',cost : 20,shippingAddress:'HSR Layout', expectedDelivery:'12-09-2022'},
//   {no: 2, itemName: 'Helium', cost : 60, shippingAddress:'HSR Layout', expectedDelivery:'12-09-2022'},
//   {no: 3, itemName: 'Helium', cost : 80, shippingAddress:'HSR Layout', expectedDelivery:'12-09-2022'}

// ];



@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  [x: string]: any;

  displayedColumns: string[] = ['no', 'itemName', 'cost', 'shippingAddress', 'expectedDelivery', 'star', 'selected'];
  dataSource: Observable<any> = of([{}]);
  // dataSource:any; 


  constructor(private service: SampleserviceService, private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.service.getDetails()
    this.dataSource = this.service.dataEvent$;
  }

  hello(id: any) {
    this.router.navigate(['/new', id])
  }

  // editRow() {
  //   this.service.createDetails({}).subscribe(d => {
  //     console.log('-------', d);

  //   })
  //   this.dialog.open(ReactiveFormComponent)
  // }

  editRow(sfjs: any) {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
      data: {
        ...sfjs, showButton: true
      }
    })
    dialogRef.afterClosed().subscribe((x: any) => {
      console.log('Dialog result', `${x}`);

    })
  }

  deleteRow(id: any) {
    this.service.deleteDetails(id).subscribe(x => {
      console.log('-----', x);

    })
  }
  favo(data: any) {
    this.service.updatefavo(data).subscribe(m => {
      console.log('-----', m);
      window.location.reload()
    })
  }
}
