import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthonticationService } from 'src/app/services/authontication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-raisecomplaint',
  templateUrl: './raisecomplaint.component.html',
  styleUrls: ['./raisecomplaint.component.css']
})
export class RaisecomplaintComponent {
  currentDate: any;
  constructor(private router:Router,private api:AuthonticationService,private http: HttpClient){ }
  termsForm!:FormGroup;
  public complaintid: string | undefined;
  submitclicked=false;
  submitclicked1=true;
  showModal = true;
  ngOnInit(): void {
    this.termsForm=new FormGroup({
      'name':new FormControl('',[Validators.required]),
      'phonenumber':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required]),
      'subject':new FormControl('',[Validators.required]),
      'complaint':new FormControl('',[Validators.required]),
      'complaintid':new FormControl('')
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

  submit() {
    this.submitclicked1=false;
    this.submitclicked=true;
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);
    let randomNumber: string;
    let generatedNumbers: string[] = [];
    do {
      randomNumber = Math.floor(Math.random() * 9000) + 1000 + '';
    } while (generatedNumbers.includes(randomNumber));
    generatedNumbers.push(randomNumber);
    this.complaintid = `${formattedDate}${randomNumber}`;

    const formData = this.termsForm.value;
    formData.complaintid = this.complaintid;
    this.http.post('http://localhost:3000/addEmp', formData)
      .subscribe(
        () => {
        },
        error => {
          console.error(error);
          alert('Something went wrong while Raising Complaint');
        }
      );
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/checkstatus']);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
      month = '0' + month;
    }

    if (day.length === 1) {
      day = '0' + day;
    }

    return year + month + day;
  }
}