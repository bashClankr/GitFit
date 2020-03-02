import { Component } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(
    private youtube: YoutubeVideoPlayer
  ) {}

  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}



