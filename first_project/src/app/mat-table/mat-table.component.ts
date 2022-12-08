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

  editRow(code: any) {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
      data: {
        ...code, showButton: true
      }
    })
    dialogRef.afterClosed().subscribe((code: any) => {
      // console.log('Dialog result', `${x}`);

    })
  }

  deleteRow(id: any) {
    this.service.deleteDetails(id).subscribe(code => {
      // console.log('-----', x);

    })
  }
  favo(data: any) {
    this.service.updatefavo(data).subscribe(code => {
      // console.log('-----', m);
      window.location.reload()
    })
  }
}
