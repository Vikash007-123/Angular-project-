import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home-page',
  templateUrl: './main-home-page.component.html',
  styleUrls: ['./main-home-page.component.css']
})
export class MainHomePageComponent implements OnInit {
  isDisplay=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplaymain(){
    this.isDisplay=!this.isDisplay;
  }

}
