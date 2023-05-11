import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Author } from '../author';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css'],
})
export class AuthorCreateComponent implements OnInit {
  authorForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  createAuthor(author: Author) {
    console.info('The author was created: ', author);
    this.toastr.success('Confirmation', 'Author created');
    this.authorForm.reset();
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', Validators.required],
      birthDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }
}
