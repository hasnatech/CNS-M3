import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-image-only',
  templateUrl: './image-only.component.html',
  styleUrls: ['./image-only.component.scss']
})
export class ImageOnlyComponent implements AfterViewInit {
  selectedimage = 2;
  @Input() content;
  forward;
  constructor(public service: MainService, public router: Router) { }


  ngAfterViewInit() {
    this.service.animate('step1');
    //  this.service.setAudio();
    //this.service.next()
  }





}
