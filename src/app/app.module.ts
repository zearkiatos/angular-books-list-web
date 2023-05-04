import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { AuthorModule } from './author/author.module';
import { ReviewModule } from './review/review.module';
import { BookRoutingModule } from './book/book.routing';
import { AuthorRoutingModule } from './author/author.routing';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';

@NgModule({
  declarations: [AppComponent, AuthorDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookRoutingModule,
    AuthorRoutingModule,
    BookModule,
    AuthorModule,
    ReviewModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
