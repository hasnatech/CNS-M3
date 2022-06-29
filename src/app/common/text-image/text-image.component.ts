import { AfterViewInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent implements AfterViewInit {

  @Input() content;
  constructor(public service: MainService, public router: Router) { }
  ngAfterViewInit() {
    this.service.animate('step1');


  }



}
