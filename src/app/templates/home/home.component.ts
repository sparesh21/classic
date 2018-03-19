import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  var owl = $('.owl-carousel');
	  
	  owl.owlCarousel({
		  margin: 30,
		  nav: false,
		  dots: true,
		  items: 4
	  });
  }

}
