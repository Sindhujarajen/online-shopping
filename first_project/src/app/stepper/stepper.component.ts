import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Country, State, City } from 'country-state-city';
import { Subject, takeUntil } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit,OnDestroy {
  
  dialog$=new Subject<boolean>
  Country: any;
  states: any;

  firstFormGroup = this._formBuilder.group({
    no: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    cost: ['', Validators.required],
    itemName: ['', Validators.required],
    shippingAddress: ['', Validators.required]
  });
  fourthFormGroup = this._formBuilder.group({
    expectedDelivery: ['', Validators.required],
  });
  thirdFormGroup: any
  country = new FormControl(null, Validators.required)
  state = new FormControl(null, Validators.required)
  countries: any

  constructor(private _formBuilder: FormBuilder, private service: SampleserviceService, public dialog: MatDialog) { }
  ngOnDestroy(): void {
    this.dialog$.next(true);
    this.dialog$.complete();
  }


  ngOnInit(): void {
    this.countries = Country.getAllCountries()
   
    this.thirdFormGroup = new FormGroup({
      Country: this.country,
      State: this.state
    })

    this.country.valueChanges.pipe(takeUntil(this.dialog$)).subscribe((code: any) => {
      this.states = State.getStatesOfCountry(code.isoCode)
    })
  }

  form1() {
    this.firstFormGroup.value;
  }

  form2() {
    this.secondFormGroup.value;
  }

  form3() {
    this.thirdFormGroup.value;
  }

  form4() {
    this.fourthFormGroup.value;
    this.service.createDetails({ ...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.fourthFormGroup.value, id: this.firstFormGroup.value['no'] }).subscribe()
    this.dialog.closeAll()
  }
  
}