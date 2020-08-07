import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { report } from 'process';


export interface PeriodicElement {
  interviewAutoId: string;
  companyName: string;
  dateTime: string;
  interviewStatus: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, Client_name: 'TR', Date: '06-22-2020 12:00:00 AM', status: 'Selected'},
//   {position: 2, Client_name: 'DXC', Date: '03-21-2029 12:40:54 PM', status: 'Inprogress'},
//   {position: 3, Client_name: 'AB', Date: '05-20-2020 02:00:30 PM', status: 'Rejected'},
//   {position: 4, Client_name: 'JPMC', Date: '02-12-2020 10:00:00 AM', status: 'Selected'},
//   {position: 5, Client_name: 'Amazon', Date: '06-23-2020 02:00:00 PM', status: 'Selected'},
//   {position: 6, Client_name: 'Fedex', Date: '09-11-2020 12:00:30 AM', status: 'Rejected'},
//   {position: 7, Client_name: 'Bank of America', Date: '06-06-2020 12:10:56 PM', status: 'Pending'},
//   {position: 8, Client_name: 'NBA', Date: '07-01-2020 11:00:00 AM', status: 'Inprogress'},
//   {position: 9, Client_name: 'HP', Date: '08-30-2020 10:00:15 AM', status: 'Selected'},
//   {position: 10, Client_name: 'SAP', Date: '01-11-2020 10:30:24 AM', status: 'Inprogress'},
 
// ];

@Component({
  selector: 'app-candidateresultdata',
  templateUrl: './candidateresultdata.component.html',
  styleUrls: ['./candidateresultdata.component.css']
})

export class CandidateresultdataComponent implements OnInit {
  ELEMENT_DATA:PeriodicElement[];
  displayedColumns: string[] = ['interview ID','Position ID', 'Candidate Name','Candidate Email','Candidate Phone', 'Date Time', 'Status','Feedback'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  users:any;


  constructor(public dialog: MatDialog,private http: HttpClient) { }
 @ViewChild(MatSort, {static: true}) sort: MatSort;
 @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
    this.getAllReports();
    // let reps=this.http.get("http://localhost:8080/mhire/interviewProcess");
    // reps.subscribe((data)=>this.users=data);
  }
  
  public getAllReports(){
    let reps=this.http.get("http://localhost:8080/mhire/interviewProcess");
    reps.subscribe(report=>this.dataSource.data=report as PeriodicElement[] );
  }
  

  openDialog(){
    
     this.dialog.open(DialogComponent);
  
  }
  applyFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
