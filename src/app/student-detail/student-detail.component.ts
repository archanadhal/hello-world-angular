import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void  {
  }
 
  public students=[
    {"id":1,"name":"archana","age":26},
     {"id":2,"name":"amit","age":25}
   ];

}
