import { Component, OnInit, Input } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';







@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  
 constructor(
   public afAuth :AngularFireAuth,
   private router: Router,
   public actionSC: ActionSheetController,
   private userService: UserService
   ){}
   showItem = false;
   db = firebase.firestore();

  ngOnInit(){
    this.isAdmin();
  }
  isAdmin(){
    if(this.afAuth.auth.currentUser.displayName == "Admin"){
      return true;
    }else{
      return false;
    }
  }
  async editProfile(){
    const actionSheet = await this.actionSC.create({
      header: 'Profile',
      buttons: [
        {text: 'Change Profile Photo',
         handler: () => {
           console.log('Change photo clicked');
         }
        }
      ]
    });
    await actionSheet.present();
  }
  aboutAlert(){
    alert("Austin: \n*Set up Firebase Authentication\n*Added Login Page and Sign Up Page\n*Added display name function that can change on account page \n\n \nIsabella: \n*Connected to firestore database\n*Pulled data from database and displayed using for loop on homepage\n*Followed Ionic 4 CRUD Operations tutorial")
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
  addWork(){
    var record = {};
    record['Name'] = (<HTMLIonInputElement>document.getElementById('woName')).value;
    record['Description'] = (<HTMLIonInputElement>document.getElementById('woDescr')).value;
    record['Image'] = (<HTMLIonInputElement>document.getElementById('woImage')).value + ".jpg";
    console.log(record);
    this.userService.create_NewWorkout(record);
  }

}

