import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success notification-div" [ngClass]="{fadeOut:displayNotification}">This website uses cookies to provide better user experience !!<div class="close"><button class="close-btn" (click)="closeNotification()">x</button></div></div>',
  styles: [".notification-div{margin:10px 0px;padding:10px 20px;text-align:center;}", "p{font-size:20px;color:#FCB07E;font-weight:bold;}",".close{float:right; margin-top:-10px;}",".close-btn{border:none;background-color:#D1E7DD;}",".fadeOut{visability:hidden;opacity:0; transition:visibility 0s 2s,opacity 2s linear;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification=true;
  }
}
