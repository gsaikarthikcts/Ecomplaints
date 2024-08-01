import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { MatButtonModule } from'@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { OfficerModule } from './officer/officer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from './footer/footer.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomerModule,
    AdminModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    OfficerModule,
    NgbModule,
    FooterModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
