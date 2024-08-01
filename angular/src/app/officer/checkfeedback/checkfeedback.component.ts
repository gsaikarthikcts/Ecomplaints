import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { feedback } from 'src/app/interfaces/feedback';
import { AuthonticationService } from 'src/app/services/authontication.service';

@Component({
  selector: 'app-checkfeedback',
  templateUrl: './checkfeedback.component.html',
  styleUrls: ['./checkfeedback.component.css']
})
export class CheckfeedbackComponent implements OnInit{
  feedback!: feedback[];
  constructor(private router:Router,private api:AuthonticationService){}
  areButtonsVisible: boolean = false;
  showButtons() {
    this.areButtonsVisible = true;
  }
  hideButtons() {
    this.areButtonsVisible = false;
  }
  toggleButtons() {
    this.areButtonsVisible = !this.areButtonsVisible;
  }
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
    this.api.Getallfeedback().subscribe((response:feedback[]) =>{
      this.feedback = response;
    });
  }
}
