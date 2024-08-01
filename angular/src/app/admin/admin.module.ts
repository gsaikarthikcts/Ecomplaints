import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintidComponent } from './complaintid/complaintid.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from'@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ComplaintidComponent,
    CustomerloginComponent,
    AdminloginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AdminModule { }
