import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


interface test{
  email?:string;
  password?:string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:test={}
  flashCardFlipped: boolean = false;

  constructor(private router: Router,public afAuth :AngularFireAuth ) { }

  ngOnInit() {
  }

  async login(){
    await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email, this.user.password
      
    )
    if(this.afAuth.auth.currentUser){
      this.router.navigateByUrl('/tabs/tab1');
    }else{
      alert("invalid");
    }
  }
  signUp(){
    this.router.navigateByUrl('/signup');
  }

  signIn(){
    this.router.navigateByUrl('/signup');
  }
  home(){
    this.router.navigateByUrl('/homepage');
  }
  forgot(){
    this.router.navigateByUrl('/forgot');
  }
  

}
