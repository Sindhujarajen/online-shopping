import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { SampleserviceService } from '../sampleservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit, OnDestroy {

  onValue$ = new Subject<boolean>
  formdata: any;

  constructor(public dialog: MatDialog, private service: SampleserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.onValue$.next(true);
    this.onValue$.complete();
  }


  ngOnInit(): void {


    this.formdata = new FormGroup({
      no: new FormControl(this.data?.no ?? '', Validators.required),
      itemName: new FormControl(this.data?.itemName ?? ''),
      cost: new FormControl(this.data?.cost ?? ''),
      shippingAddress: new FormControl(this.data?.shippingAddress ?? ''),
      expectedDelivery: new FormControl(this.data?.expectedDelivery ?? ''),
    })
  }
  submit(data: any) {

    this.service.createDetails(
      { ...data, id: data['no'] }).pipe(takeUntil(this.onValue$)).subscribe(code => {
        window.location.reload();

      })
    this.dialog.closeAll();
  }

  update(Details: any) {
    this.service.editDetails(Details).pipe(takeUntil(this.onValue$)).subscribe(code => {
      window.location.reload();
    })
  }

  openSnackbar() {
    this._snackBar.open('updated successful', 'Thankyou💐')
  }

  closeSnackbar() {
    this._snackBar.open('added successful', 'Thankyou 💐')
  }

}




