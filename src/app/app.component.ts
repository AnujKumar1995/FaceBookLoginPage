import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nagarro';
  count: number = 0;
  url: string = "";

  Counter() { 
    this.count = this.count + 1;
  }
  UpdatedImg() { 
    this.url = "https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg";
  }
}
