import { Component, ViewChild } from '@angular/core';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Component({
  selector: 'infinite-scroll-example',
  templateUrl: 'infinite-scroll-example.html',
  styleUrls: ['./infinite-scroll-example.css']
})

export class Tab1Page {

  constructor(
    private youtube: YoutubeVideoPlayer
  ) {}
  

  openMyVideo(id){
    this.youtube.openVideo(id);
  }
}



