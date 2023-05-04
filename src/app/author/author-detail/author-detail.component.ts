import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetail } from '../authorDetail';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  authorId!: string;
  @Input() author!: AuthorDetail;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  getAuthor(): void {
    this.authorService.getAuthor(this.authorId).subscribe((author) => {
      this.author = author;
    });
  }

  ngOnInit(): void {
    console.log(this.author);
    if (this.author === undefined) {
      this.authorId = this.route.snapshot.paramMap.get('id')!;
      console.log(this.authorId);
      if (this.authorId) {
        this.getAuthor();
      }
    }
  }
}
