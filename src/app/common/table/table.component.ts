import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  @Input() content;
  constructor(public service: MainService , public router : Router) { }



  ngAfterViewInit() {
    this.service.animate('step1');
    
  }
  show() {
    this.router.navigateByUrl('/menu');
  }
  getPosition(currentPage) {
    for (let i = 0; i < this.service.data.default.main[1].children.length; i++) {
      const item = this.service.data.default.main[1].children[i];
      const next = this.service.data.default.main[1].children[i + 1];
      if (next == undefined && currentPage >= item.startPage) {
        this.service.color = item.mybox;
      
        return i;

      }
      else if (currentPage >= item.startPage && currentPage < next.startPage) {
        return i;
      }
    }
  }
}
