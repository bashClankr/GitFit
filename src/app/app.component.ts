import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeIonic();
    //firebase variables for firestore
    const firebase = require("firebase/app");
    const admin = require('firebase-admin');
    const functions = require('firebase-functions');
    
    
    var firebaseConfig ={
      apiKey: "AIzaSyC1tIGaZe7OEAYpmn0sm8BdxKSobEzoxVs",
      authDomain: "gitfit-3d6ec.firebaseapp.com",
      databaseURL: "https://gitfit-3d6ec.firebaseio.com",
      projectId: "gitfit-3d6ec",
      storageBucket: "gitfit-3d6ec.appspot.com",
      messagingSenderId: "118531700924",
      appId: "1:118531700924:web:538588aaa3eaf7de49f8b9"
    }
    // Required for side-effects
    require("firebase/auth");
    require("firebase/firestore");
    require("firebase/app");

    firebase.initializeApp(firebaseConfig);
    let db = admin.firestore();
    var workoutRef = db.collection('Workouts');
    let setAb = workoutRef.doc('Ab Workout').set({
      Description: "hello world"
    });
    console.log(setAb);
  
    
    
  }
  
  
  initializeIonic() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('/login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
 

}
