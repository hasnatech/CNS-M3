import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-m3-pop-up',
  templateUrl: './m3-pop-up.component.html',
  styleUrls: ['./m3-pop-up.component.scss']
})
export class M3PopUpComponent implements OnInit {

  constructor(public service : MainService) { }

  ngOnInit(): void {
  }

  selected = -1
  selected1= -1
  visit = []

  show(n:any){
    this.selected = n;
    this.visit[n] = true;
    this.service.shownavigation = false
  }

  show1(n:any){
    this.selected1 = n;
  }

  close(n:any){
    this.selected = -1;
    this.service.shownavigation = true
  }

  close1(n:any){
    this.selected1 = -1;
  }

  content=[
    {
      img:"assets/m3_img5.jpg",
      text:"Nutrient concept that improves Young Pig growability",
      Popup:`<h2 class="bold">Improves Young Pig growability*</h2>
      <p class="bold m-0">What does it do?</p>
      <ul class="m-0">
        <li>Helps feed intake, weight gain, and growth uniformity</li>
        <li>Improves gut health and reduces diarrhea</li>
        <li>Stimulates development of the digestive system as piglets move away from milk</li>
        <li>Reduces reliance on antibiotics and zinc oxide</li>
      </ul>
      <p class="bold m-0">How does it do it?</p>
      <ul class="m-0">
        <li>Prepares piglet digestive system for weaning by helping transition from sow milk to 100% solid feed</li>
        <li>Splits transition feeding into phases to maximize feed intake and encourage growth </li>
           <ul class="no_style">
           <li>Phases include Neonatal, Transition, NeoTrans, and Starter</li>
           </ul>
        <li>Decreases feed costs by creating feeding system phases</li>
      </ul>`,
      note:"Global brand for young pigs not used in every country.*"
      
    },
    {
      img:"assets/m3_img6.jpg",
      text:"Nutrient concept that enhances Sow productivity & Piglet livability",
      Popup:`<h2 class="bold">Enhances Sow productivity & Piglet livability</h2>
      <p class="bold m-0">What does it do?</p>
      <ul class="m-0">
        <li>Increases milk production and sow immunity</li>
        <li>Better manages hyper prolific sows</li>
        <li>Develops sows/gilts and increases lifetime productivity</li>
        <li>Reduces scouring and health issues </li>
      </ul>
      <p class="bold m-0">How does it do it?</p>
      <ul class="m-0">
        <li>Uses precise nutrition based on ingredient assessment to Improve product consistency</li>
        <li>Applies our SW CHO FM (Swine Fermentable Carbohydrates) calculation which lowers constipation, farrowing time, and stillborn births</li>
        <li>Uses SW DCAD calculation to Increase milk yield</li>
        <li>New lactating sow diet created with Sow 3.0 offerings which improves body condition of sow and piglet weaning performance.</li>
      </ul>`
    },
    {
      img:"assets/m3_img7.jpg",
      text:"Nutrient concept that increases Grower-Finisher profitability",
      Popup:`<h2 class="bold">Increases Grower-Finisher profitability</h2>
      <p class="bold m-0">What does it do?</p>
      <ul class="m-0">
        <li>Helps reduce formulation costs by better utilizing nutrients</li>
        <li>Improves carcass meat quality</li>
        <li>Simplifies farm management and helps customers operate more efficiently </li>
        <li>Increases gut health</li>
      </ul>
      <p class="bold m-0">How does it do it?</p>
      <ul class="m-0">
        <li>Compares common nutrients to reduce formulation costs by improving nutrient utilization using CNS nutrients</li>
        <li>Estimates performance and feed conversion using pork MAX before customer decides</li>
        <li>Compares suppliers so customers choose the one that best meets their needs</li>
      </ul>`
    },
    {
      img:"assets/m3_img8.png",
      text:"Software platform that optimizes nutrition & modeling",
      Popup:`<h2 class="bold">Optimizes nutrition & modeling</h2>
      <p class="bold m-0">What does it do?</p>
      <ul class="m-0">
        <li>Software platform that helps customers and their consultant make the best decisions in diet formulation, profitability, production, and nutrition </li>
        <li>Provides solutions for changing markets and gives “what-if” scenarios that show economic projections</li>
        <li>Determines a customized animal feed</li>
      </ul>
      <p class="bold m-0">How does it do it?</p>
      <ul class="m-0">
        <li>Incorporates CNS technology and aligns it to formulation capabilities with the specific needs of the customer
        </li>
        <li>Uses CNS to understand animal requirements and links to the nutrient supply from key ingredients</li>
      </ul>`,
      note:"For additional details, see “Overview – pork MAX” module",
      instruction:"Click here to see the history of pork MAX",
      Popup1: '<h2 class="bold">History of pork MAX</h2> <img src="assets/images/history.png" class="pt-5 maximg">'
    },
    {
      img:"assets/m3_img9.png",
      text:"Software platform that creates efficiencies in the ingredient and nutrient supply chain",
      Popup:`<h2 class="bold">Efficiency in the ingredient and nutrient supply chain</h2>
      <p class="bold m-0">What does it do?</p>
      <ul class="m-0">
        <li>Cloud-based nutrition platform that connects processes to create efficiencies </li>
        <li>Optimizes nutrition by helping customers find the best suppliers and manage operations</li>
        <li>Supports better animal performance, integrates decision-making, and improves operational excellence</li>
      </ul>
      <p class="bold m-0">How does it do it?</p>
      <ul class="m-0">
        <li>Manages ingredient and finished good samples through Nutrient Analysis capability using CNS</li>
        <li>Connects to CNS data to compare suppliers and manage ingredient variability so customers make informed purchase decisions</li>
        <li>Monitors feed bins, tracks feed consumption and feed bin history</li>
        <li>Feed Ordering capability ensures customer can order the right feed at the right time</li>
      </ul>`
    },
  ]

}
