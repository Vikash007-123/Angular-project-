import { CandidateService } from './../ervices/candidate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-candidate-info',
  templateUrl: './search-candidate-info.component.html',
  styleUrls: ['./search-candidate-info.component.css']
})
export class SearchCandidateInfoComponent implements OnInit {

  user: any;

  constructor(
    private route:Router,
    private candidateService:CandidateService
  ) { }

  ngOnInit() {
    this.candidateService.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.data;
        console.log(user);
      },
     
    );
  }


gotoDisplay(){
  this.route.navigate(['candidateinfo']);
}





}
