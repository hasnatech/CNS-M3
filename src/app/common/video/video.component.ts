import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {
  @Input() content;
  playvideo = false;
  playbutton = true
  constructor(public service: MainService, protected sanitizer: DomSanitizer) { }

  

  ngOnInit() {
  }
  updateVideoUrl(id: string) {
    const url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  play(){
    this.playvideo = true;
    this.playbutton = false;
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
