import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { userDetails } from '../interfaces/userDetails';
import { feedback } from '../interfaces/feedback';
import { signin } from '../interfaces/signin';
import { adminlogin } from '../interfaces/adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  baseUrl: any;

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/userDetails"
  //getting details of the complaint 
  GetallEmployee():Observable<userDetails[]>{
    return this.http.get<userDetails[]>(this.url);
  }

  url1:string="http://localhost:3000/feedback"
  //getting feedback
  Getallfeedback():Observable<feedback[]>{
    return this.http.get<feedback[]>(this.url1);
  }

  //post request to store complaint details
  addUsers(newUser:any):Observable<userDetails[]>{
    return this.http.post<userDetails[]>("http://localhost:3000/addEmp",newUser);
  }

  //post request to store feedback
  addfeedback(newFeedback:any):Observable<feedback[]>{
    return this.http.post<feedback[]>("http://localhost:3000/addReq",newFeedback);
  }
  
  //post request to store registration
  addsignin(newSignin:any):Observable<signin[]>{
    return this.http.post<signin[]>("http://localhost:3000/signin",newSignin);
  }

  //for admin login
  adminlogin(credentials:any):Observable<adminlogin[]> {
    return this.http.post<any>("http://localhost:3000/adminlogin", credentials);
  }

  //for customer login
  customerlogin(customerlogin:any):Observable<adminlogin[]> {
    return this.http.post<any>("http://localhost:3000/customerlogin", customerlogin);
  }

  //updatecomplaintstatus
  updateComplaintStatus(complaint: userDetails): Observable<any> {
    const url = `http://localhost:3000/userDetails/${complaint.complaintid}`;
    return this.http.put(url, complaint);
  }

  //checkcomplaint status
  updateComplaintPriority(priority: userDetails): Observable<any> {
    const url = `http://localhost:3000/userDetails/${priority.complaintid}/priority`;
    return this.http.put(url, { priority: priority.priority });
  }
}