import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisecomplaintComponent } from './raisecomplaint/raisecomplaint.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintSuccessModalComponent } from './complaint-success-modal/complaint-success-modal.component';

@NgModule({
  declarations: [
    RaisecomplaintComponent,
    CheckstatusComponent,
    FeedbackComponent,
    ComplaintSuccessModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
