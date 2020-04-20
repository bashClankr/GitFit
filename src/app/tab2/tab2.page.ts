import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  favorites: any;

  
  constructor(
    public afAuth :AngularFireAuth,
    public userService: UserService
    ) {}
  show = false;
  
  ngOnInit(){
    const user = this.afAuth.auth.currentUser.displayName
    console.log(user);
    //initializes show to false when page loads so favorites aren't displayed until they ask
    this.show = false;
  }

  favoriteAlert(){
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
    
  }
}
