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
}
