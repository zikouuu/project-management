import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  myControl = new FormControl()
  
  members: any[] = [];

  http: any;

  constructor() { }

  ngOnInit(): void {
  }

}
