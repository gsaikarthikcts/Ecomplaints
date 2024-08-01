import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaintid',
  templateUrl: './complaintid.component.html',
  styleUrls: ['./complaintid.component.css']
})
export class ComplaintidComponent {
  constructor(private router:Router){}
  admin(){
    this.router.navigate(['/adminlogin'])
  }
  customer(){
    this.router.navigate(['/customerlogin'])
  }
  register(){
    this.router.navigate(['/register'])
  }
}
