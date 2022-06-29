import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements AfterViewInit {

  constructor(public service: MainService) { }

  ngAfterViewInit(): void {
    /*var myPath = document.getElementById("line");
    var length = myPath.getTotalLength();
    console.log(length);*/
  } 

}
