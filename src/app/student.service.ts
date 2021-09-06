import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClientModule) { }

  
  getstudents(){
    // return this.http.get();
  }
}
