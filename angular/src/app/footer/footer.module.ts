import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from'@angular/material/button';

@NgModule({
  declarations: [
  
    AboutComponent,
       FaqComponent,
       TermsComponent,
       PrivacyComponent,
       DisclaimerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class FooterModule { }
