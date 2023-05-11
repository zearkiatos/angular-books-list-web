/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './HttpErrorInterceptor.service';

describe('Service: HttpErrorInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptorService],
      imports: [ToastrModule.forRoot()],
    });
  });

  it('should ...', inject(
    [HttpErrorInterceptorService],
    (service: HttpErrorInterceptorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
