import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintstatusComponent } from './complaintstatus/complaintstatus.component';
import { SetpriorityComponent } from './setpriority/setpriority.component';
import { CheckfeedbackComponent } from './checkfeedback/checkfeedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ComplaintstatusComponent,
    SetpriorityComponent,
    CheckfeedbackComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ]
})
export class OfficerModule { }
