import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Hello World!';
  paragraph = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, natus!'
  arr = ['one', 'two', 'three'];
  arrNum = [1, 2, 3, 4];
  
}
