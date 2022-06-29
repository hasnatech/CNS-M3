import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-row-reverse',
  templateUrl: './row-reverse.component.html',
  styleUrls: ['./row-reverse.component.scss']
})
export class RowReverseComponent implements AfterViewInit {
  @Input() content;
  pageCnt = 1;
  totalPage = 3;

  constructor(public service: MainService, public router: Router) { }


  ngAfterViewInit() {
    this.service.animate('step1');

  }



}
