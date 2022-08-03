import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urli="http://localhost:3000/posts"


  constructor(private http :HttpClient) { 
    this.getall().subscribe(res=>{
      console.log(res);
    })
    console.log("aaa");
    
  }

  getall()
  {
    return this.http.get("http://localhost:3000/posts/1")
  }
  post(data)

  {
  return this.http.post(this.urli,data)
  }
}
