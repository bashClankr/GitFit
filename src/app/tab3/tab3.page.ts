import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  photoAlert(){
    alert("Will allow user to upload photo from their own device");
  }
  editAlert(){
    alert("Will allow user to change their name and location on the account page");
  }
  aboutAlert(){
    alert("Austin: \n*Front page card functionality\n*Detailed workouts\n*Alerts and buttons for future functionality\n*Homepage layout\n*Hosted on firebase\n \nIsabella: \n*Made array of card/picures to display\n*Tab design/information\n*Account page\n*Homepage layout")
  }
}
