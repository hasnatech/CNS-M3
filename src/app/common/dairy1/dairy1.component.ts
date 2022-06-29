import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-dairy1',
  templateUrl: './dairy1.component.html',
  styleUrls: ['./dairy1.component.scss']
})
export class Dairy1Component implements OnInit {

  constructor(public service:MainService) { }

  ngOnInit() {
  }

}
