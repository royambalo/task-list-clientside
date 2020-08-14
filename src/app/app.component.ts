import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  name="roy"

  showmewhatyougot(){
    return "this is"+this.title+"dd"+this.title;
  }
}