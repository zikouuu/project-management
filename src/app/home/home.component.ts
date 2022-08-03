import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 data={
  id:32,
  azer:"anis"
 }
  constructor(private http : HttpService) { 


  
  }

  ngOnInit(): void {
  }



}
