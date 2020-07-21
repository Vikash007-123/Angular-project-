import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

isDisplay=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplay(){
    this.isDisplay=!this.isDisplay;
  }

}
