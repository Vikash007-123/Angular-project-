import { Component, OnInit } from '@angular/core';
import { JobOpening } from '../job-opening';
import { JopopeningService } from '../jopopening.service';
import { Router } from '@angular/router';
import { Job } from '../job';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {
  job: Job = new Job();
  client = this.job.client;

  
  Clientmail:String;
  submitted = false;
  
  constructor(private jobopeneningService: JopopeningService, private clientservice:ClientService, 
    private router: Router) { }

  ngOnInit(): void {
    

}
onSubmit(){
  this.submitted = true;
    this.save();
}

save() {
  this.getClient();
  this.Clientmail="clientname@gmail.com"
  this.jobopeneningService.createJobOpenings(this.job,this.Clientmail)
    .subscribe(data => console.log(data + "job"), error => console.log(error));
  this.job = new Job();
  this.getjoblist();
}
getClient() {

  this.clientservice.getClient("saroosh.gull@mphasis.com")
    .subscribe(data => {

      this.job.client = data;
    }, error => console.log(error));
}
getjoblist(){
  this.router.navigate(['/job-list']);
}
}
