import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

import { MainService } from 'src/app/service/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements AfterViewInit {
  pageCnt = 1;
  @Input() content;

  constructor(public service: MainService, public router: Router, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.service.animate('step1');
    this.cdref.detectChanges();

  }


}
