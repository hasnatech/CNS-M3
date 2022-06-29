import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-m2-notepad',
  templateUrl: './m2-notepad.component.html',
  styleUrls: ['./m2-notepad.component.scss']
})
export class M2NotepadComponent implements OnInit {
pop1 : any
pop2 : any
pop3 : any
pop4 : any
visit1 : any
visit2 : any
visit3 : any
visit4 : any
firstcontent = true
  constructor(public service : MainService) { }

  ngOnInit() {
  }
show1(){
  this.pop1 = true
  this.pop2 = false
  this.pop3 = false
  this.pop4 = false
  this.firstcontent = false
  this.visit1 = true
  this.service.shownavigation = false
  
}
show2(){
  this.pop1 = false
  this.pop2 = true
  this.pop3 = false
  this.pop4 = false
  this.firstcontent = false
  this.visit2=true
  this.service.shownavigation = false
}
show3(){
  this.pop1 = false
  this.pop2 = false
  this.pop3 = true
  this.pop4 = false
  this.firstcontent = false
  this.visit3 = true
  this.service.shownavigation = false
}
show4(){
  this.pop1 = false
  this.pop2 = false
  this.pop3 = false
  this.pop4 = true
  this.firstcontent = false
  this.visit4 = true
  this.service.shownavigation = false
}

closeall(){
  this.pop1 = false
  this.pop2 = false
  this.pop3 = false
  this.pop4 = false
  this.firstcontent = true
  this.service.shownavigation = true
}
}
