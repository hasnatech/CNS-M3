import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() content;

  constructor(public service: MainService, public router: Router) { }

  ngOnInit() {
  }

  getPosition(currentPage) {
    for (let i = 0; i < this.service.data.default.main[1].children.length; i++) {
      const item = this.service.data.default.main[1].children[i];

      const next = this.service.data.default.main[1].children[i + 1];
      if (next == undefined && currentPage >= item.startPage) {
        this.service.parentIndex = i;
        return i;
      }
      else if (currentPage >= item.startPage && currentPage < next.startPage) {
        this.service.parentIndex = i;
        return i;
      }
    }
  }
}
