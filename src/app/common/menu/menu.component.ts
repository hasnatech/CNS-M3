import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menucontent = true;
@Input() content
  constructor(public service : MainService , public router : Router) { }
 
  ngOnInit() {
    this.service.setAudio('empty.mp3')
  }

  hide(){
   // this.menucontent = false;
    //this.router.navigateByUrl('')

  }
  getPosition(currentPage) {
    for (let i = 0; i < this.service.data.default.main[1].children.length; i++) {
      const item = this.service.data.default.main[1].children[i];

      const next = this.service.data.default.main[1].children[i + 1];
      if (next == undefined && currentPage >= item.startPage) {


        return i;

      }
      else if (currentPage >= item.startPage && currentPage < next.startPage) {
        return i;
      }
    }
  }
}
