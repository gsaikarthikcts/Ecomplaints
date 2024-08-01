import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
signup!: FormGroup;
constructor(private formBuilder: FormBuilder, private router:Router, private api:AuthonticationService) { }
  ngOnInit() {
    this.signup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
      password: ['', Validators.required,Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
      },
      {validator: this.passwordMatchValidator});
  }
  onSubmit() {
    console.log(this.signup.value)
  }
  passwordMatchValidator(control: AbstractControl):ValidationErrors|null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password == null || confirmPassword == null) {
      return null;
    }
    return password.value===confirmPassword.value?null:{passwordMatch:true};
  }
  home(){
    const formData = this.signup.value;
    this.api.addsignin(formData).subscribe(()=>{
      alert("Registration Successfull")
      this.router.navigate(['/customerlogin']);
    },(err)=>{
      alert("Registration Failed")
    })
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
  mainhome(){
    this.router.navigate(['/'])
  }
}