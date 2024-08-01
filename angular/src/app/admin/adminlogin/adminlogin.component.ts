import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  termsForm!:FormGroup;
  constructor(private router:Router,private api: AuthonticationService, private formBuilder: FormBuilder){ }
  ngOnInit(): void{
    this.termsForm= new FormGroup({
    'username': new FormControl('',[Validators.required,Validators.minLength(6)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
}
adminlogin() {
  const formData = this.termsForm.value;
  this.api.adminlogin(formData).subscribe(()=>{
    this.router.navigate(['/setpriority']);
  },(err)=>{
    alert("Check Userid and password-'Otherized Persons can Login'")
  })
}
setpriority() {
  this.router.navigate(['/setpriority']);
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
}