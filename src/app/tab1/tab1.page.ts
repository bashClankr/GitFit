import { Component } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { R3TargetBinder } from '@angular/compiler';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  item =false;
  constructor(
    private youtube: YoutubeVideoPlayer
  ) {}

  openMyVideo(id){
    this.youtube.openVideo(id);
  }

  expandItem(){
    
    if(this.item ==false){
      this.item=true
    }
    else{
      this.item=false;
    }
  }
}



