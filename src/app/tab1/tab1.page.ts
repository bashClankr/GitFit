import { Component, ViewChild } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  @ViewChild("IonInfiniteScroll", {static: false} ) infiniteScroll: IonInfiniteScroll;
  Exercises: any;

  constructor(
    private youtube: YoutubeVideoPlayer
  ) {
    this.Exercises = [{"image": "/assets/exercise2.jpg", "name": "Weight workout" },{"image": "/assets/exercise2.jpg", "name": "Ab workout"}, 
    {"image": "/assets/exercise3.jpg","name": "Yoga"},{"image": "/assets/exercise1.jpg", "name": "no idea"}];

  
  }

  loadData(event){
    setTimeout(() => {
      console.log('Done');
      
      event.target.complete();

      if(this.Exercises.length==5){
        event.target.disabled = true;
      }
    },500);
  }
  
  segmentChanged(event){

  }
  openMyVideo(id){
    this.youtube.openVideo(id);
  }
 
  }




