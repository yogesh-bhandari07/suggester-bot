import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() author!: string;
  @Input() date!: Date;
  @Input() imageUrl!: string;
  @Input() postId!: number; // Add this line for the post ID

  constructor(private router: Router) {}

  viewFullPost() {
    this.router.navigate(['/post', this.postId]); // Adjust the route based on your routing setup
  }

  getTruncatedContent(): string {
    const words = this.content.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...'; // Add ellipsis if truncated
    }
    return this.content;
  }
}
