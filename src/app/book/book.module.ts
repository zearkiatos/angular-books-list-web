import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [BookListComponent],
  declarations: [BookListComponent, BookDetailComponent],
})
export class BookModule {}
