import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buttonProject';
  colors = ['red', 'green', 'yellow', 'blue', 'pink'];
  border = [false,true,false,true,true]
  validate = [false,false,false,false,false]
  emptyList: Array<string> = [];
  allValidate = false;
  name = "test";

  ngReceive($event : any): void {
    let even = $event;
    this.emptyList.includes(even) ? "":this.emptyList.push(even) 
    if (this.colors.length === this.emptyList.length)this.allValidate = true;
}
}