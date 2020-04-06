import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  
  constructor(public afAuth :AngularFireAuth) {}

  ngOnInit(){
    const user = this.afAuth.auth.currentUser.displayName
    console.log(user);
  }
}
