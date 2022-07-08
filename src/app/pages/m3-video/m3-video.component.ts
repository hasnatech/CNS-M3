import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m3-video',
  templateUrl: './m3-video.component.html',
  styleUrls: ['./m3-video.component.scss']
})
export class M3VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected = -1
  visit = false

  show(n:any){
    this.selected = n;
    this.visit[n] = true;
  }

  close(n:any){
    this.selected = -1;
  }

  content=[
    {
      img:"assets/video/video1.png",
      text:"Eastern Europe",
      video:"assets/video/video1.mp4",
      poster:"assets/video/video1.png"
      
      
    },
    {
      img:"assets/video/video1.png",
      text:"Mexico",
      video:"assets/video/video1.mp4",
      poster:"assets/video/video1.png"
     
    },
    {
      img:"assets/video/video1.png",
      text:"China",
      video:"assets/video/video1.mp4",
      poster:"assets/video/video1.png"
      
    },
  ]

}
