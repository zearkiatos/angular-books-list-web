/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditorialService } from './editorial.service';

describe('Service: Editorial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorialService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([EditorialService], (service: EditorialService) => {
    expect(service).toBeTruthy();
  }));
});
