import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public testimonials = [
    {
      name: 'Debal',
      text: 'Simply put, this software transformed my workflow! Its intuitive interface and powerful features make tasks a breeze. A game-changer for productivity!',
      company: 'MCSAM',
      position: 'CTO',
      image: 'avtar.jpg',
    },
    {
      name: 'Debal',
      text: 'Simply put, this software transformed my workflow! Its intuitive interface and powerful features make tasks a breeze. A game-changer for productivity!',
      company: 'MCSAM',
      position: 'CTO',
      image: 'avtar.jpg',
    },
    {
      name: 'Debal',
      text: 'Simply put, this software transformed my workflow! Its intuitive interface and powerful features make tasks a breeze. A game-changer for productivity!',
      company: 'MCSAM',
      position: 'CTO',
      image: 'avtar.jpg',
    },
  ];

  ngOnInit(): void {}
}
