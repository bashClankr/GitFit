import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { AngularFirestore } from '@angular/fire/firestore';



interface test{
  email?:string;
  password?:string;
  name?:string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:test={}

  constructor(public afAuth :AngularFireAuth, private router: Router, public store: AngularFirestore) { }
  
  ngOnInit() {
  }
  async signUp(){
    var user1 = this.afAuth.auth;
    var current=this.user;

    await user1.createUserWithEmailAndPassword(
      this.user.email, this.user.password
    )
    .then(cred => {
      user1.currentUser.updateProfile({
        displayName: current.name,
        photoURL: ""
      });
      //creates unique user document with their id
      this.store.collection('Users').doc(user1.currentUser.uid).set({
        UserName: this.user.name,
        UID: user1.currentUser.uid,
        profilePictureURL: "",
        UserEmail: this.user.email
      });
      //creates a favorites collection in user's unique collection
      this.store.collection('Users').doc(user1.currentUser.uid).set({
        Favorites: this.store.collection('Users/' + user1.currentUser.uid +'/Favorites').doc('fave1').set({
          WorkoutName: "hello",
          WorkoutDescript: "helloagain",
          WorkoutImg: "photoURL"
        })
      })
      
    })
    .catch(function(error) {
      console.log(error.message);
    });
    
    if(this.afAuth.auth.currentUser){
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      await alert("Invalid Email, Please try again.")

    }

  }
  home(){
    this.router.navigateByUrl('homepage');
  }

  }

