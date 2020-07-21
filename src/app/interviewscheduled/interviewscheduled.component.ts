import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interviewscheduled',
  templateUrl: './interviewscheduled.component.html',
  styleUrls: ['./interviewscheduled.component.css']
})
export class InterviewscheduledComponent implements OnInit {
  users:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let reps=this.http.get("http://localhost:8080/mhire/interviewProcess");
    reps.subscribe((data)=>this.users=data);
  }

}
