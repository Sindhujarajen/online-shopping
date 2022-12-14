import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GoshoppingComponent } from './goshopping/goshopping.component';
import { Guard } from './guard.service';
import { LoginComponent } from './login/login.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewoneComponent } from './newone/newone.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StepperComponent } from './stepper/stepper.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'new/:id',component:NewoneComponent},
  {path:'mat-table',canActivate:[Guard],component:MatTableComponent},
  {path :'login',component:LoginComponent},

  {path:'goshopping',canActivate:[Guard],component:GoshoppingComponent,
  children: [
  {path:'Clothes',canActivate:[Guard],component:GoshoppingComponent},

  {path:'Cosmetic',canActivate:[Guard],component:GoshoppingComponent},

  {path:'Grocery',canActivate:[Guard],component:GoshoppingComponent}
]},

  {path:'wishlist',canActivate:[Guard],component:WishlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
