import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [EditorialListComponent],
  declarations: [EditorialListComponent],
})
export class EditorialModule {}
