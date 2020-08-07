import { Job } from './../job';
import { Component, OnInit } from '@angular/core';
import { JopopeningService } from '../jopopening.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {
  jobId:number;
  job:Job;
  constructor(private jobopeneningService: JopopeningService, private route: ActivatedRoute, 
    private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this. job = new Job();

    this.jobId = this.route.snapshot.params['jobId'];
    
    this.jobopeneningService.getJobOpeningById(this.jobId)
      .subscribe(data => {
        console.log(data)
        this.job = data;
      }, error => console.log(error));
   
  }
  onSubmit() {
    this.updateJobOpenings();    
  }
  updateJobOpenings() {
    this.jobopeneningService.updateJobOpenings(this.jobId, this.job)
      .subscribe(data => console.log(data), error => console.log(error));
    this.job = new Job();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/job-list']);
  }


}
