import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorCreateComponent } from './author-create/author-create.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [AuthorCreateComponent],
  declarations: [AuthorCreateComponent],
})
export class AuthorModule {}
