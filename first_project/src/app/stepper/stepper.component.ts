import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Country, State, City }  from 'country-state-city';
import { SampleserviceService } from '../sampleservice.service'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent  implements OnInit{
  // service: any;
  // dialog: any;
  Country:any;
  states: any;
  firstFormGroup = this._formBuilder.group({
    no: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    cost: ['', Validators.required],
    itemName:['', Validators.required],
    shippingAddress:['', Validators.required]
  });
  fourthFormGroup = this._formBuilder.group({
    expectedDelivery: ['', Validators.required],
  });
  thirdFormGroup :any
   country=new FormControl(null,Validators.required)
   state=new FormControl(null,Validators.required)
   countries:any
  
  constructor(private _formBuilder: FormBuilder,private service:SampleserviceService,public dialog:MatDialog) {}

  
  ngOnInit(): void {
    this.countries=Country.getAllCountries()
    // console.log(Country.getAllCountries())
    this.thirdFormGroup=new FormGroup({
      Country:this.country,
      State:this.state
    })
   
    this.country.valueChanges.subscribe((d:any)=>{
       this.states=State.getStatesOfCountry(d.isoCode)
       console.log('----',d);
       console.log('---',this.states);
       
       
    })
  }
  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }

  form3(){
    console.log(this.thirdFormGroup.value);
  }

  form4(){
    console.log(this.fourthFormGroup.value);
    this.service.createDetails({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.fourthFormGroup.value, id:this.firstFormGroup.value['no']}).subscribe(n=>{
      console.log('----',n);
      
    })
    this.dialog.closeAll()
  }
  
  // fifthFormGroup = this._formBuilder.group({
  //   fifthCtrl: ['', Validators.required],
  // });
}