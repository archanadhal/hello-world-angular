import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Archana';
  isRecording=true;
  isbool=true;
  color="red";
  colors=["red","green","pink","yellow"];
  public Name="amit";
  message="welcome Archana";
  person={"firstname":"Archana",
          "lastname":"Dhal"};
  public Message="";
  public date=new Date();

  styleFun(){
    const styleObj:any={};
    if(this.isbool){
      styleObj.backgroundColor='red';
      styleObj.height = 50;
      styleObj.fontSize =20
    }else{
      styleObj.backgroundColor='gray';
      styleObj.height = 50;
      styleObj.fontSize =20
    }
    return styleObj;
  }
   getValidateClass(){
    let currentClass:string='';
    if(this.isbool){
      currentClass += 'border-success';
    }
    if(this.isRecording == false){
      currentClass += 'font-large';
    }else{
      currentClass += 'font-large class-info';
    }
    return currentClass;
  }

  isReturn(){
    if(this.isRecording == true){
      return true;
    }
    return false;
  } 

  onChangeInput(event:any){
    console.log(event.target.value);
  }

  ChangeName():void{
    this.title='ankita';
  }
  toggleEvents(){
    console.log('abababaababab');
  }
  public name="";
}
