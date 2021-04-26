import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class APICallerService {

  //===================== Data==================
  public domainName = "https://wookie.codesubmit.io/movies";

  constructor(private http: HttpClient) {

  }

  public getHeaders() {
    return new HttpHeaders({
      'Authorization': "Bearer Wookie2019"
    });
  }

  // Get Movies
  public getMovies() {
    var headers = this.getHeaders();
    var options_role =  {
      headers: headers
    };
    return this.http.get(this.domainName,options_role);
  }

  // Get Movie Details
  // public getMovieDetails(id: string) {
  //   var headers = this.getHeaders();
  //   var options_role =  {
  //     headers: headers
  //   };
  //   return this.http.get(this.domainName + "/" + id ,options_role);
  // }


}
