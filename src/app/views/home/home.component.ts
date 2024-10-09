import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  today: Date = new Date();

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

  public posts = [
    {
      title: 'Jenkins',
      content:
        'Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.',
      author: 'Yogesh Bhandari',
      date: new Date(),
      imageUrl: '/assets/images/banner-home.svg',
      postId: 1,
    },
    {
      title: 'Ansible',
      content:
        'Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality',
      author: 'Yogesh Bhandari',
      date: new Date(),
      imageUrl: '/assets/images/banner-home.svg',
      postId: 1,
    },
  ];

  ngOnInit(): void {}
}
