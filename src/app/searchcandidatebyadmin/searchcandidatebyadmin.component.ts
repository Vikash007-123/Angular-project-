import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcandidatebyadmin',
  templateUrl: './searchcandidatebyadmin.component.html',
  styleUrls: ['./searchcandidatebyadmin.component.css']
})
export class SearchcandidatebyadminComponent implements OnInit {
   a:boolean=false;
  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  gotoDisplayadmin(){
    this.a=true;
    // this.route.navigate(['viewCandidatebyadmin']);
  }

}
