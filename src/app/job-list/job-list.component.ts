import { HttpClient } from '@angular/common/http';
import { Job } from './../job';
import { Component, OnInit } from '@angular/core';
import { JopopeningService } from '../jopopening.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobOpening } from '../job-opening';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  Jobopening: Observable<JobOpening[]>;
  joblist:any;

  constructor(private jobopeneningService: JopopeningService, private route: ActivatedRoute, 
    private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    let resp=this.http.get('http://localhost:8080/mhire/jobOpenings');
    resp.subscribe((data)=>this.joblist=data);
    this.reloadData();
        
  
  }
  

  reloadData() {
    this.Jobopening=this.jobopeneningService.getAllJobOpenings();

}



  deleteJobOpenings(jobId: number) {
    if(confirm('Are you sure want to delete ??')){
    this.jobopeneningService.deleteJobOpenings(jobId)
      .subscribe(
        data => {
          console.log(data);
            this.Jobopening = data;
          this.reloadData();
        
        },
        error => console.log(error));
      }
  }
  updateJobOpenings(jobId: number){
    
    this.router.navigate(['updatejob',jobId]);
   }

  getjobviewDetails(jobId:number){
    this.router.navigate(['detailsjob',jobId])
  }





 

}
