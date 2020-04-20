
import { Component, OnInit } from '@angular/core';
 

//import { Component, Input } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { R3TargetBinder } from '@angular/compiler';
import { UserService } from './../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


//const db = firebase.firestore();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  workouts: any;
  workoutName: string;
  description: string;
  image: string;

  //seach stuff
  results:any;
  term:any;
  show:boolean;
  


    constructor(
      public userService: UserService, 
      private youtube: YoutubeVideoPlayer,
      private afAuth: AngularFireAuth
      ) {}

    item =""
    test="blah"
    user1 = this.afAuth.auth;
    count = 0;
    

    ngOnInit() {
      this.show=false;
        this.userService.read_Workouts().subscribe(data =>{
          this.workouts = data.map(e => {
            return{
              id: e.payload.doc.id,
              isEdit: false,
              Name: e.payload.doc.data()['Name'],
              Description: e.payload.doc.data()['Description'],
              Image: e.payload.doc.data()['Image'],
  
            };
          })
          console.log(this.workouts);
        });

    }
    //Adding workout to favorites
    faveButton(item){
      var record ={};
      var name = item.Name;
      var descript = item.Description;
      var image = item.Image;
      record['Name'] = name;
      record['Descript'] = descript;
      record['Image'] = image;
      record['Workout'] = true;
      console.log(record);
      //record is the data passed to create fields and name is to specify the document's name so there aren't duplicates
      this.userService.create_Favorite(record, name);
      //when their account is created, it makes an empty document called 'fave1' so the collection can exist
      //this is to delete it, probably not the best way but it works 
      if(this.count == 0){
        this.userService.delete_Favorite('fave1');
        this.count++;
      }
      
    }
    
  

    openMyVideo(id){
      this.youtube.openVideo(id);
    }


    expandItem(tes){
      
      console.log(tes);
      if(this.item ==""){
        this.item=tes
        
      }
      else{
        this.item="";
      }
      
    }
    search(){ 
        this.show=true;
        this.term= (<HTMLInputElement>document.getElementById("search")).value;

      
        var formatTerm=this.term.toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
  
  
        console.log(formatTerm);
  
        this.userService.search_Workouts(formatTerm).subscribe(data =>{
          this.results = data.map(e => {
            return{
              id: e.payload.doc.id,
              isEdit: false,
              Name: e.payload.doc.data()['Name'],
              Description: e.payload.doc.data()['Description'],
              Image: e.payload.doc.data()['Image'],
  
            };
          })
          console.log(this.results);
          this.workouts=this.results;
        });
     
      
    }
    

    
}

