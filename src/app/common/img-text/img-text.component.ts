import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-img-text',
  templateUrl: './img-text.component.html',
  styleUrls: ['./img-text.component.scss']
})
export class ImgTextComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit() {
  }

}
