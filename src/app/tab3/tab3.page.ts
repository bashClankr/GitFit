import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
 constructor(){}
 
  photoAlert(){
    alert("Will allow user to upload photo from their own device");
  }
  editProfile(){
    alert("Will allow user to change image and name on their profile")
  }
  aboutAlert(){
    alert("Austin: \n\n \nIsabella: \n*Connected to firestore database\n*Pulled data from database and displayed using for loop on homepage\n*Followed Ionic 4 CRUD Operations tutorial")
  }
}
