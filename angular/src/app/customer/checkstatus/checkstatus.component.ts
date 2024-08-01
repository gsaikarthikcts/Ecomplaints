import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent {
  termsForm!: FormGroup;
  submitclicked = false;
  statusMessage = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.termsForm = new FormGroup({
      'compid': new FormControl('', [Validators.required])
    });
  }

  raise() {
    this.router.navigate(['/raisecomplaint']);
  }

  status() {
    this.router.navigate(['/checkstatus']);
  }

  feedback() {
    this.router.navigate(['/feedback']);
  }

  home() {
    this.router.navigate(['/']);
  }

  submit() {
    this.submitclicked = true;
  
    const complaintIdControl = this.termsForm.get('compid');
    if (complaintIdControl && complaintIdControl.value) {
      const complaintId = complaintIdControl.value;
  
      // Send HTTP GET request to retrieve the status
      this.http.get<any>(`http://localhost:3000/userDetails/${complaintId}`)
        .subscribe(
          (response) => {
            // Update the status message with the response from the server
            this.statusMessage = response.status;
          },
          (error) => {
            console.log(error);
            // Handle any error that occurred during the HTTP request
            this.statusMessage = 'Error occurred while getting the Complaint status';
          }
        );
    }
  }

  logout() {
    this.router.navigate(['/customerlogin']);
  }
}