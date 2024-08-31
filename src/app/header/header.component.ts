import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan:string='"Shopping is my all-time favorite thing to do!" !'
  // getSlogan(){
  //   return 'This is new slogan for our application !';
  // }
  source:string='/assets/shopping.jpg';
}
