import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public students=[
    {"id":1,"name":"archana","age":26},
     {"id":2,"name":"amit","age":25}
   ];


}
