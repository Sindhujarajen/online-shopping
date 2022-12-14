import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Details } from '../model';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit,OnDestroy {

  onKill$=new Subject<boolean>

  displayedColumns: string[] = ['no', 'itemName', 'cost', 'shippingAddress', 'expectedDelivery', 'star', 'selected'];
  dataSource: Observable<Details[]> = of([]);
  
  constructor(private service: SampleserviceService, private router: Router, private dialog: MatDialog) { }
  ngOnDestroy(): void {
    this.onKill$.next(true);
    this.onKill$.complete();
  }
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
    dialogRef.afterClosed().pipe(takeUntil(this.onKill$)).subscribe()
  }

  deleteRow(id: any) {
    this.service.deleteDetails(id).pipe(takeUntil(this.onKill$)).subscribe()
  }

  favo(data: any) {
    this.service.updatefavo(data).pipe(takeUntil(this.onKill$)).subscribe(code => {
      window.location.reload()
    })
  }
}
