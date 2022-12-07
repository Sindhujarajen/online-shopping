import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent {
  add:any
  
  // [x: string]: Object;
  constructor(private service: SampleserviceService, private route: ActivatedRoute, private dialog:MatDialog) { }
  ngOnInit() {
    this.service.getItem(this.route.snapshot.params['id'])
      .subscribe(a => {
        console.log('--param--', a);
        this.add=a
      })
   }
   edit(add:any) {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
         data:{
          ...add,
          showButton:true
         }
        })
    dialogRef.afterClosed().subscribe((x:any) => {
      console.log('Dialog result', `${x}`);

    })
  }
  
  delete(id: any) {
    this.service.deleteDetails(id).subscribe(x => {
      console.log('-----', x);

    })
  }
   
}



