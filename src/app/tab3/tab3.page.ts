import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
 constructor(public afAuth :AngularFireAuth,private router: Router){}
 
  photoAlert(){
    alert("Will allow user to upload photo from their own device");
  }
  editProfile(){
    alert("Will allow user to change image and name on their profile")
  }
  aboutAlert(){
    alert("Austin: \n*Set up Firebase Authentication\n*Added Login Page and Sign Up Page\n*Added display name function that can change on account page \n\n \nIsabella: \n*Connected to firestore database\n*Pulled data from database and displayed using for loop on homepage\n*Followed Ionic 4 CRUD Operations tutorial")
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
