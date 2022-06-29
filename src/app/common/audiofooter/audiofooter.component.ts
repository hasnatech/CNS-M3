import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-audiofooter',
  templateUrl: './audiofooter.component.html',
  styleUrls: ['./audiofooter.component.scss']
})
export class AudiofooterComponent implements AfterViewInit {
  currentTime;
  totalTime;
  currentTimeStr;
  totalTimeStr;
  play = true;
  volumeRange
  @Input() content
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;
  audioElem;
  volume = false;

  constructor(public service: MainService) { }

  ngAfterViewInit(): void {



    //audio
    this.audioElem = this.audioPlayer.nativeElement;
    /*this.volumeRange.addEventListener('change', (e) => {
      const target = e.target as Element;
      this.audioElem.volume = target.value / 100;

      console.log(e.target.value)
    });*/
    this.service.audioElem = this.audioElem
    console.log('ngAfterViewInit');
    //console.log(this.audioElem.volume.value)
    this.audioElem.onplay = () => {
      this.service.getTimeline().play();
      this.play = true;
    };

    this.audioElem.onpause = () => {
      this.service.getTimeline().pause();
      this.play = false;
    };

    this.audioElem.onseeked = () => {
      this.service.getTimeline().time(this.audioElem.currentTime);
    };

    this.audioElem.onended = () => {
      this.service.getTimeline().pause();
      this.play = false;
      this.service.showNav = true;

    };

    this.audioElem.ontimeupdate = () => {

      this.currentTime = this.audioElem.currentTime;
      this.totalTime = this.audioElem.duration;

      this.currentTimeStr = this.convertTominSec(this.currentTime);
      this.totalTimeStr = this.convertTominSec(this.totalTime);
      // console.log(this.currentTime);
    };

  }

  convertTominSec(time) {
    if (isNaN(time)) {
      return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const minutestr = minutes < 10 ? '0' + minutes : minutes;
    const secondstr = seconds < 10 ? '0' + seconds : seconds;
    return minutestr + ':' + secondstr;
  }

  audioPP() {
    if (this.service.getAudio() !== 'assets/media/') {
      if (this.play === false) {
        this.audioElem.play();
      } else {
        this.audioElem.pause();
      }
      this.play = !this.play;
    }
  }
  mouseDown(event) {
    if (this.service.getAudio() !== 'assets/media/') {
      const per = event.layerX / event.target.offsetWidth;
      this.audioElem.currentTime = this.totalTime * per;
      this.audioElem.pause();
      this.play = false;
      // console.log('drop', per);
    }
  }
  audioPlay() {
    this.audioElem.play();
    this.play = true;

  }

  restartaudio() {
    this.audioElem.currentTime = 0;
    this.audioElem.pause();
    this.play = false;
    this.audioPlay();
  }

  volumeControl() {
    this.volume = !this.volume;
    // console.log(this.volume);
    this.audioElem.muted = this.volume;
    if (this.volume == false) {
      //this.audioElem.volume(0);
    } else {
      //this.audioElem.volume(1);
    }
  }
}
