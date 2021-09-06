import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-archana',
  template:`
  <h5>{{"Hello "+ parentData}}</h5>
  <button (click)="fireEvent()">Send Event</button>
  
  `,
  styleUrls: ['./archana.component.css']
})
export class ArchanaComponent implements OnInit {

  @Input() public parentData:any;
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey Archana');
  }

  
}
