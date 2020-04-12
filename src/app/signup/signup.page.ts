import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


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

  constructor(public afAuth :AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async signUp(){
    var user1 = this.afAuth.auth;
    var current=this.user;

    await user1.createUserWithEmailAndPassword(
      this.user.email, this.user.password
    )
    .then(function () {
      user1.currentUser.updateProfile({
        displayName: current.name,
        photoURL: ""
      });
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
  }

