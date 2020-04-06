
import { Component, OnInit } from '@angular/core';
 

//import { Component, Input } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { R3TargetBinder } from '@angular/compiler';
import { UserService } from './../user.service';
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


    constructor(public userService: UserService, private youtube: YoutubeVideoPlayer) {}

    item =""


    ngOnInit() {
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
    CreateRecord() {
      let record = {};
      record['Name'] = this.workoutName;
      record['Description'] = this.description;
      record['Image'] = this.image;
      this.userService.create_NewWorkout(record).then(resp => {
        this.workoutName = "";
        this.description = undefined;
        this.image = "";
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
        });
    }
  
    RemoveRecord(rowID) {
      this.userService.delete_Workout(rowID);
    }
  
    EditRecord(record) {
      record.isEdit = true;
      record.EditName = record.Name;
      record.EditDescription = record.Description;
      record.EditImage = record.Image;
    }
  
    UpdateRecord(recordRow) {
      let record = {};
      record['Name'] = recordRow.EditName;
      record['Description'] = recordRow.EditDescription;
      record['Image'] = recordRow.EditImage;
      this.userService.update_Workout(recordRow.id, record);
      recordRow.isEdit = false;
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
      var test= (<HTMLInputElement>document.getElementById("search")).value;
      console.log(test);
      alert("App will search and display results matching: " + test);
    }
    favoriteAlert(){
      alert("Will let user favorite this workout and then adds it to their profile, and in their profile on database")
    }
}

