import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class JopopeningService {
  private baseUrl = "http://localhost:8080/mhire/jobOpenings";
  private baseurlgetjob="http://localhost:8080/mhire/jobOpenings/jobId";

  constructor(private http: HttpClient) {}

  getJobOpeningById(jobId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${jobId}`);
  }
  

  createJobOpenings(
    jobOpening: Object,
    clientContactEmail: String
  ): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${clientContactEmail}`, jobOpening);
  }

  updateJobOpenings(jobId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${jobId}`, value);
  }

  deleteJobOpenings(jobId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${jobId}`, {
      responseType: "text",
    });
  }

  getAllJobOpenings(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
