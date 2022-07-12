import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-m3-video',
  templateUrl: './m3-video.component.html',
  styleUrls: ['./m3-video.component.scss']
})
export class M3VideoComponent implements OnInit {

  constructor(public service : MainService) { }

  ngOnInit(): void {
  }

  selected = -1
  visit = []

  show(n:any){
    this.selected = n;
    this.visit[n] = true;
    this.service.shownavigation = false
  }

  close(n:any){
    this.selected = -1;
    this.service.shownavigation = true
  }

  content=[
    {
      img:"assets/video/video2.png",
      text:"Eastern Europe",
      video:"assets/video/video2.mp4",
      poster:"assets/video/video2.png"
      
      
    },
    {
      img:"assets/video/video3.png",
      text:"Mexico",
      video:"assets/video/video3.mp4",
      poster:"assets/video/video3.png"
     
    },
    {
      img:"assets/video/video4.png",
      text:"China",
      video:"assets/video/video4.mp4",
      poster:"assets/video/video4.png"
      
    },
  ]

}
