import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2-page36',
  templateUrl: './m2-page36.component.html',
  styleUrls: ['./m2-page36.component.scss']
})
export class M2Page36Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  clickedArr = [];

  open(id){
    this.clickedArr[id] = true
  }
}
