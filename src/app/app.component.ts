import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from './service/main.service';
import { filter } from 'rxjs/operators';
import { security } from 'ht-security';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'cns';

  @ViewChild('footer', { static: false }) footer:any;

  instr = false;
  /* @HostListener('window:resize', ['$event']) onResize(event) {
 
     const page = document.getElementById('page');
     const width = document.documentElement.clientWidth;
     const height = document.documentElement.clientHeight;
     let scaleW = 1;
     let scaleH = 1;
 
     if (width < 1440) {
       scaleW = width / 1440;
     }
     if (height < 856) {
       scaleH = height / 856;
     }
 
     console.log(scaleW, scaleH);
     const scale = Math.min(scaleW, scaleH);
     //const left = - ((page.offsetWidth / 2) * scale);
     //console.log(width, left)
     page.style.transform = 'scale(' + scale + ')';
   }*/

  constructor(public service: MainService, private cdref: ChangeDetectorRef, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      service.animate();
    });


    security({
      mode: "development" 
      //mode: "deployment"     
    });
  }
  ngAfterViewInit(): void {
    //this.service.setAudio('130617_Vessels.mp3');
    //this.instr = true;
    setTimeout(() => {
      //console.log("this.service", this.service.audioElem.duration, this.service.audioElem.paused);
      if (this.service.audioElem.duration > 0 && this.service.audioElem.paused) {
        this.instr = true;
      }
    }, 1000);
    const script1 = document.createElement('script');

    script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';

    document.head.appendChild(script1);
    // this.onResize(null);
    this.cdref.detectChanges();
  }

  close() {
    this.instr = false;
    this.service.setAudio('Slide_01_V2.mp3');
    this.footer.audioPlay();

  }

}
