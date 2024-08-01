import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from 'src/app/interfaces/userDetails';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-setpriority',
  templateUrl: './setpriority.component.html',
  styleUrls: ['./setpriority.component.css']
})
export class SetpriorityComponent implements OnInit{
  userDetails!: userDetails[];
  constructor(private router:Router,private api:AuthonticationService){}
  setstatus(){
    this.router.navigate(['/complaintstatus'])
  }
  setpriority(){
    this.router.navigate(['/setpriority'])
  }
  cfeedback(){
    this.router.navigate(['/checkfeedback'])
  }
  home(){
    this.router.navigate(['/'])
  }
  logout(){
    this.router.navigate(['/adminlogin'])
  }
  ngOnInit(): void {
    this.api.GetallEmployee().subscribe((response:userDetails[]) =>{
      this.userDetails = response;
      this.sortUserDetails();
    });
  }


  sortUserDetails(){
    // Sort the userDetails array based on priority (High > Medium > Low)
    this.userDetails.sort((a, b) => {
      if (a.priority === 'High') {
        return -1;
      } else if (a.priority === 'Medium' && b.priority !== 'High') {
        return -1;
      } else if (a.priority === 'Low' && b.priority !== 'High' && b.priority !== 'Medium') {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sub() {
    // Save the updated priority for each complaint
    for (const priority of this.userDetails) {
      this.api.updateComplaintPriority(priority).subscribe(
        () => {
          // alert('Priority updated successfully');
          this.router.navigate(['/setpriority'])
        },
        error => {
          console.error(error);
          alert('Something went wrong while setting Priority');
        }
      );
    }
  }
}
