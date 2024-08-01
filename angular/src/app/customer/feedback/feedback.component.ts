import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private router:Router,private api:AuthonticationService){}
  termsForm!:FormGroup;
  submitclicked=false;
  ngOnInit(): void {
    this.termsForm=new FormGroup({
      'feedback':new FormControl('',[Validators.required])
    })
  }
  raise(){
    this.router.navigate(['/raisecomplaint'])
  }
  status(){
    this.router.navigate(['/checkstatus'])
  }
  feedback(){
    this.router.navigate(['/feedback'])
  }
  home(){
    this.router.navigate(['/'])
  }
  logout(){
    this.router.navigate(['/customerlogin'])
  }
  submitfeedback(){
    const formData = this.termsForm.value;
    this.api.addfeedback(formData).subscribe(()=>{
      this.submitclicked=true;
    },(err)=>{
      alert("Error while submitting Feedback")
    })
  }
}
