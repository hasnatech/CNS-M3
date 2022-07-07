import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-m2-page14',
  templateUrl: './m2-page14.component.html',
  styleUrls: ['./m2-page14.component.scss']
})
export class M2Page14Component implements OnInit {

  constructor(public service:MainService) { }

  ngOnInit() {
  }

}
