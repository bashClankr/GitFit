
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Form } from "@angular/forms";
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import { R3TargetBinder } from '@angular/compiler';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page  {

  //workoutForm: FormGroup;

  item = "";

  constructor(
  
   //public fb: FormBuilder,
    private youtube: YoutubeVideoPlayer,
    
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
    alert("App will search and display results maching: " + test);
  }
}

