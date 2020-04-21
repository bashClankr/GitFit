import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  favorites: any;
  users: any;
 
  

  
  constructor(
    public afAuth :AngularFireAuth,
    public userService: UserService
    ) {}
  show = false;
  reveal = false;
  
  
  ngOnInit(){
    const user = this.afAuth.auth.currentUser.displayName
    console.log(user);
    //initializes show to false when page loads so favorites aren't displayed until they ask
    this.show = false;
    this.reveal = false;
    var db = firebase.firestore();
    this.userService.read_UserInfo().subscribe(data => {
      this.users = data.map(e => {
        return{ 
          id: e.payload.doc.id,
          gender: e.payload.doc.data()['Gender'],
          exp: e.payload.doc.data()['Experience'],
          name: e.payload.doc.data()['UserName']
        }
      })
    })
    console.log(this.users);             
  
    

  }

  faveButton(){
    //on click, show = true so it shows their favorites
    this.show = true;
    this.userService.read_Favorites().subscribe(data =>{
      this.favorites = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['WorkoutName'],
          Descript: e.payload.doc.data()['WorkoutDescript'],
          Image: e.payload.doc.data()['Image'],

        };
      })
      console.log(this.favorites);
      console.log(this.show);
    });
    this.reveal=true;
  }
  deleteButton(item:any){
    this.userService.delete_Favorite(item.id);
  }
}
