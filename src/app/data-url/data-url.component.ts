import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-url',
  templateUrl: './data-url.component.html',
  styleUrls: ['./data-url.component.css']
})
export class DataUrlComponent implements OnInit {
  users:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let reps=this.http.get("https://jsonplaceholder.typicode.com/users");
    reps.subscribe((data)=>this.users=data);
  }

}
