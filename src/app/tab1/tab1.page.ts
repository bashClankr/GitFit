import { Component, Input } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { R3TargetBinder } from '@angular/compiler';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  item =""
  constructor(
    private youtube: YoutubeVideoPlayer
  ) {}

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
  }
}



