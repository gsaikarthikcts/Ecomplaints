import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit{
  termsForm!:FormGroup;
  constructor(private router:Router,private api:AuthonticationService){}
  ngOnInit(): void{
    this.termsForm= new FormGroup({
    'firstname': new FormControl('',[Validators.required,Validators.minLength(6)]),
    // 'firstname': new FormControl('Bobby'),
    // 'firstname': new FormControl(),
    'password': new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  const termsObj={
    'firstname':"sai karthik",
    'password':"text"
  }
}
admin(){
  this.router.navigate(['/adminlogin']);
}
customer(){
  this.router.navigate(['/customerlogin']);
}
register(){
  this.router.navigate(['/register'])
}
home(){
  this.router.navigate(['/'])
}
customerlogin() {
  const formData = this.termsForm.value;
  this.api.customerlogin(formData).subscribe(()=>{
    this.router.navigate(['/raisecomplaint']);
  },(err)=>{
    alert("Check Userid and Password")
  })
}
}