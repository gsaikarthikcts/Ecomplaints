import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ComplaintidComponent } from './admin/complaintid/complaintid.component';
import { CustomerloginComponent } from './admin/customerlogin/customerlogin.component';
import { RegisterComponent } from './admin/register/register.component';
import { CheckstatusComponent } from './customer/checkstatus/checkstatus.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { RaisecomplaintComponent } from './customer/raisecomplaint/raisecomplaint.component';
import { AboutComponent } from './footer/about/about.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { FaqComponent } from './footer/faq/faq.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { CheckfeedbackComponent } from './officer/checkfeedback/checkfeedback.component';
import { ComplaintstatusComponent } from './officer/complaintstatus/complaintstatus.component';
import { SetpriorityComponent } from './officer/setpriority/setpriority.component';

const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
  { path: '', component: ComplaintidComponent },
  { path: 'customerlogin', component: CustomerloginComponent },
  { path: 'checkstatus', component: CheckstatusComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'raisecomplaint', component: RaisecomplaintComponent },
  { path: 'complaintstatus', component: ComplaintstatusComponent },
  { path: 'setpriority', component: SetpriorityComponent },
  { path: 'checkfeedback', component: CheckfeedbackComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
