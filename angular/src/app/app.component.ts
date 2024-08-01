import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthonticationService } from './services/authontication.service';
// import { userDetails } from './interfaces/userDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private router:Router){}
  // userDetails!:userDetails[]
  title = 'ecomplaints';
  home(){
    this.router.navigate(['/'])
  }

  // ngOnInit(): void {
  //   this.api.GetallEmployee().subscribe((response:userDetails[]) =>{
  //     this.userDetails = response;
  //   });
  // }
}
