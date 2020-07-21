import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  private url = "http://dummy.restapiexample.com/api/v1/employees";
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
