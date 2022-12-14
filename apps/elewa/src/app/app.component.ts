import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@elewa/api-interfaces';

@Component({
  selector: 'elewa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  changeForm = false;

  constructor(private http: HttpClient) {}




  changeFormHandler(){
    this.changeForm = !this.changeForm;
  }
}
