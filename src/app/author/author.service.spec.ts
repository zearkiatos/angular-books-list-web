/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorService } from './author.service';

describe('Service: Author', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService],
    });
  });

  it('should ...', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
