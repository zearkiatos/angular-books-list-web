import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { AuthorModule } from './author/author.module';
import { ReviewModule } from './review/review.module';
import { BookRoutingModule } from './book/book.routing';
import { AuthorRoutingModule } from './author/author.routing';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import { HttpErrorInterceptorService } from 'src/interceptors/HttpErrorInterceptor.service';

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
    EditorialModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
