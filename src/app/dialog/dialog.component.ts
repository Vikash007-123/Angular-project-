import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  name:string="vikash";
  message:string="Invalid Email and password";

  constructor() { }

  ngOnInit(): void {
  }

}
