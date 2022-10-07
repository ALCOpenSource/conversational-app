import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elewa';
  changeForm:boolean = false;


  changeFormHandler(){
    this.changeForm = !this.changeForm;
  }




}
