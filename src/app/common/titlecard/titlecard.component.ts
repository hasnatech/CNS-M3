import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-titlecard',
  templateUrl: './titlecard.component.html',
  styleUrls: ['./titlecard.component.scss']
})
export class TitlecardComponent implements AfterViewInit {
  @Input() content;
  constructor(public service: MainService, public router: Router, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.service.animate('step1');
    this.cdref.detectChanges();
  }


}
