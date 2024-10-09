import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  postId!: number; // Assuming you have a post ID
  post: any; // This will hold the post data
  latestPosts: any[] = []; // Array to hold latest posts

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!; // Get the post ID from the URL
      this.fetchPostDetails(this.postId); // Fetch the post details based on ID
      this.fetchLatestPosts(); // Fetch the latest posts
    });
  }

  fetchPostDetails(id: number) {
    // Mocking a post fetch. Replace with actual API call to your backend.
    const mockPosts = [
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

    this.post = mockPosts.find(post => post.postId === id); // Simulate fetching the post from the API
  }

  fetchLatestPosts() {
    // Mocking latest posts. Replace with an actual API call to your backend.
    const mockLatestPosts = [
      {
        id: 3,
        title: 'Latest Blog Post 1',
        author: 'Alice',
        date: new Date(),
      },
      {
        id: 4,
        title: 'Latest Blog Post 2',
        author: 'Bob',
        date: new Date(),
      },
      {
        id: 5,
        title: 'Latest Blog Post 3',
        author: 'Charlie',
        date: new Date(),
      },
    ];

    this.latestPosts = mockLatestPosts; // Set the latest posts
  }
}
