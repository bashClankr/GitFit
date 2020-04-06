import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  favoriteAlert(){
    alert("Upon clicking, user will be displayed a list of all workouts they have favorited from the Home Tab.")
  }
}
