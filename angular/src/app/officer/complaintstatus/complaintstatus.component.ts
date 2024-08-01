import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from 'src/app/interfaces/userDetails';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-complaintstatus',
  templateUrl: './complaintstatus.component.html',
  styleUrls: ['./complaintstatus.component.css']
})
export class ComplaintstatusComponent implements OnInit {
  userDetails!: userDetails[];

  constructor(private router: Router, private api: AuthonticationService) {}

  setstatus() {
    this.router.navigate(['/complaintstatus']);
  }

  setpriority() {
    this.router.navigate(['/setpriority']);
  }

  cfeedback() {
    this.router.navigate(['/checkfeedback']);
  }

  home() {
    this.router.navigate(['/']);
  }

  logout() {
    this.router.navigate(['/adminlogin']);
  }

  ngOnInit(): void {
    this.api.GetallEmployee().subscribe((response: userDetails[]) => {
      this.userDetails = response;
      this.sortUserDetails();
    });
  }


  sortUserDetails(){
    // Sort the userDetails array based on priority (High > Medium > Low)
    this.userDetails.sort((a, b) => {
      if (a.status === 'Open') {
        return -1;
      } else if (a.status === 'Pending' && b.status !== 'Open') {
        return -1;
      } else if (a.status === 'Close' && b.status !== 'Open' && b.status !== 'Pending') {
        return -1;
      } else {
        return 1;
      }
    });
  }


  sub() {
    // Save the updated status for each complaint
    for (const complaint of this.userDetails) {
      this.api.updateComplaintStatus(complaint).subscribe(
        () => {
          // alert('Status updated successfully');
          this.router.navigate(['/complaintstatus']);
        },
        error => {
          console.error(error);
          alert('Something went wrong while submitting the status');
        }
      );
    }
  }
}