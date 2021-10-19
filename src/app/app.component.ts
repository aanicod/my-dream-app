import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"]; 
   
   isavailable = true;
   myClickFunction(event)
   {
     alert("Button is clicked");
     
   }
}
