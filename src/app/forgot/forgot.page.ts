import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email:string;

  constructor(private router: Router,public afAuth :AngularFireAuth ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('/homepage');
  }
  reset(){

    this.afAuth.auth.sendPasswordResetEmail(this.email).then(function() {
      alert("Reset Email Sent!");
    }).catch(function(error) {
      alert("Invalid Email Address");
    });
  }

}
