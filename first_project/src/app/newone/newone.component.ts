import { DataSource } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { observable, Subject, takeUntil } from 'rxjs';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit,OnDestroy {
  add:any
  value$=new Subject<boolean>
 
  constructor(private service: SampleserviceService, private route: ActivatedRoute, private dialog:MatDialog) { }
  
  ngOnDestroy(): void {
    this.value$.next(true);
    this.value$.complete();
  }
  
  ngOnInit() {
    this.service.getItem(this.route.snapshot.params['id']).pipe(takeUntil(this.value$))
      .subscribe()
    }
    
   edit(add:any) {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
         data:{
          ...add,
          showButton:true
         }
        })
    dialogRef.afterClosed().pipe(takeUntil(this.value$)).subscribe()
    
  }
  
  delete(id: any) {
    this.service.deleteDetails(id).pipe(takeUntil(this.value$)).subscribe()
  }
  
   
}



