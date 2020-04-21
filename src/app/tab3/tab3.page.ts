import { Component, OnInit, Input } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';








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
  private userService: UserService,
  private alertCtrl: AlertController
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
        {text: 'Change ',
         handler: () => {
           console.log('Change photo clicked');
         }
        }
      ]
    });
    await actionSheet.present();
  }

  async editEmail() {
    const alert = await this.alertCtrl.create({
      header: 'Edit email',
      inputs: [
        {
          name: 'Email',
          placeholder: this.afAuth.auth.currentUser.email
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Submit',
          handler: inputs => {
            if (inputs.Email)
              this.userService.update_Email(inputs.Email);
              this.afAuth.auth.currentUser.updateEmail(inputs.Email);
          }
        }
      ]
    });
   await alert.present();
  }

  async editName() {
    const alert = await this.alertCtrl.create({
      header: 'Edit Name',
      inputs: [
        {
          name: 'Name',
          placeholder: "Enter Name"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Submit',
          handler: inputs => {
            if (inputs.Email)
              
              this.afAuth.auth.currentUser.updateProfile({
                displayName: inputs.Name,
              }).then(function() {
                // "Jane Q. User"
              
                // "https://example.com/jane-q-user/profile.jpg"
                
              }, function(error) {
                // An error happened.
              });
              this.userService.update_Name(inputs.Name);
          }
        }
      ]
    }
    );
   await alert.present();

  }




  aboutAlert(){
    alert("Made by Austin and Isabella");
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
  addWork(){
    var record = {};
    record['Name'] = (<HTMLIonInputElement>document.getElementById('woName')).value;
    record['Description'] = (<HTMLIonInputElement>document.getElementById('woDescr')).value;
    record['Image'] = (<HTMLIonInputElement>document.getElementById('woImage')).value;
    console.log(record);
    this.userService.create_NewWorkout(record);
  }

  editWork(){
    var name = (<HTMLIonInputElement>document.getElementById('edName')).value;
    var des = (<HTMLIonInputElement>document.getElementById('edDescr')).value;
    var img = (<HTMLIonInputElement>document.getElementById('edImage')).value;
    console.log(name);
    this.userService.update_Work(name,des,img);
    name=null;
    des=null;
    img=null;
  }

}

