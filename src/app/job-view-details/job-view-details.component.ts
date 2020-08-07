import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JopopeningService } from '../jopopening.service';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-view-details',
  templateUrl: './job-view-details.component.html',
  styleUrls: ['./job-view-details.component.css']
})
export class JobViewDetailsComponent implements OnInit {
  id: number;
  job: Job;

  constructor(private jobopeneningService: JopopeningService, private clientservice:ClientService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   this.getjobdetails();
  }

  getjobdetails(){
    this.job=new Job();
    this.id = this.route.snapshot.params[this.id];
    this.jobopeneningService.getJobOpeningById(this.id)
      .subscribe(data => {
        console.log(data)
        this.job = data;
      }, error => console.log(error));

  }
  list(){
    
    this.router.navigate(['/job-list']);
 
  }

}


