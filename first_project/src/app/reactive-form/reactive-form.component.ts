import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { SampleserviceService } from '../sampleservice.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  formdata: any;
  // private _snackBar: any;
  constructor(public dialog: MatDialog, private service: SampleserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    //  console.log('--data--',this.data);

    this.formdata = new FormGroup({
      no: new FormControl(this.data?.no ?? '', Validators.required),
      itemName: new FormControl(this.data?.itemName ?? ''),
      cost: new FormControl(this.data?.cost ?? ''),
      shippingAddress: new FormControl(this.data?.shippingAddress ?? ''),
      expectedDelivery: new FormControl(this.data?.expectedDelivery ?? ''),
    })
  }
  submit(data: any) {

    //  console.log('--submit--',data);

    this.service.createDetails(
      { ...data, id: data['no'] }).subscribe(code => {
        window.location.reload();
        // console.log('----submit---',s);

      })
    this.dialog.closeAll();
    // console.log('---',data);


  }
  update(Details: any) {
    this.service.editDetails(Details).subscribe(code => {
      window.location.reload();
      // console.log('----submit---',m);
    })
  }
  openSnackbar() {
    this._snackBar.open('updated successful', 'Thankyou💐')
  }
  closeSnackbar() {
    this._snackBar.open('added successful', 'Thankyou 💐')
  }
}




