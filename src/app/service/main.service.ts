import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import * as data from '../../assets/content.json';
import * as data from '../../assets/content.json'

import { gsap, TimelineMax, Power0, Power3 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  data;
  content;
  percentage = 0;
  page = 11;
  totalLength = 0; 
  color: any;
  private audio: string;

  private tl = new TimelineMax();
  showHeader;
  showNav = false;
  end = false;
  inter_nav = 2;
  parentIndex = 0;
  menu = false;
  audioElem
  shownavigation = true
  constructor(private router: Router) {
    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ScrollToPlugin);
    this.data = data;
    this.totalLength = this.data.default.main[2].children.length;
    this.goto(this.page);

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      console.log("shouldReuseRoute");
      return false;
    };
  }

  goto(num) {
    //  console.log(num)
    this.menu = false;
    this.page = num;
    this.content = this.data.default.main[2].children[num];
    this.router.navigateByUrl(this.content.url + "/" + num);
    this.percentage = (this.page + 1) / this.totalLength;
    //  console.log(this.percentage)
    //  console.log(this.page, this.content.url + "/" + num)


    this.setAudio(this.content.audio)



    this.showNav = false;
    console.log(this.content.audio)
    // console.log(this.data.default.main[1].children[0].primarybox)

  }



  previous() {
    console.log("internal_nav ", this.content.internal_nav)
    // if (this.content.internal_nav == true) {
    //   this.inter_nav--;
    //   if (this.inter_nav == 1) {
    //     this.inter_nav = 2;
    //     this.goto(--this.page);
    //   }
    // } else {
    //   this.inter_nav = 2;

    // }
    this.goto(--this.page);
  }

  next() {
    console.log("internal_nav ", this.content.internal_nav)
    // if (this.content.internal_nav == true) {
    //   this.inter_nav++;
    //   if (this.inter_nav == 7) {
    //     this.inter_nav = 2;
    //     this.goto(++this.page);
    //   }
    // } else {
    //   this.inter_nav = 2;

    // }
    this.goto(++this.page);
  }
  animate(name = "") {
    // console.log(this.tl)
    this.tl.clear();
    gsap.ticker.lagSmoothing(0);
    this.tl = new TimelineMax();
    // console.log(2, this.tl)
    //  gsap.to(myDiv, { duration: 2, scrollTo: 250 });
    let elems;
    if (name == "") {

      elems = document.querySelectorAll('[data-animatetime]');

    } else {
      elems = document.querySelectorAll('[data-animatename=' + name + ']');
      // console.log(elems);
    }
    //console.log("animation ", elems);
    elems.forEach(element => {
      if (element['dataset'].animatetype == 'scroll') {
        // scroll animation
        //  console.log('scroll', element.id)
        this.tl.to(window, { scrollTo: '#' + element.id, duration: 0.4, ease: Power0.easeNone },
          element['dataset'].animatetime);

      } else {

        // slide animation
        if (element['dataset'].animatefrom == "right") {
          this.tl.fromTo(element, { opacity: 0, x: 75 }, { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
        else if (element['dataset'].animatefrom == "left") {
          this.tl.fromTo(element, { opacity: 0, x: -75 }, { x: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
        else {
          this.tl.fromTo(element, { opacity: 0, y: 50 }, { y: 0, duration: 1, opacity: 1 },
            element['dataset'].animatetime);
        }
      }
      this.tl.pause();
      // console.log(element, element['dataset'].animatetime);
    });
  }

  getAudio() {
    return this.audio;
  }
  setAudio(a) {
    // console.log(a);
    this.audio = '';
    this.audio = 'assets/media/' + a;
  }
  setTimeline(t) {
    this.tl.progress(t);
  }

  getTimeline() {
    return this.tl;
  }
}
