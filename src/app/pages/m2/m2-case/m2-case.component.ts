import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m2-case',
  templateUrl: './m2-case.component.html',
  styleUrls: ['./m2-case.component.scss']
})
export class M2CaseComponent implements AfterViewInit {
  @Input() content;
  constructor(public service: MainService, public router: Router, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.service.animate('step1');
    this.cdref.detectChanges();
  }

}
