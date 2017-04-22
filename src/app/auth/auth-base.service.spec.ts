import { TestBed, inject } from '@angular/core/testing';

import { AuthBaseService } from './auth-base.service';

describe('AuthBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthBaseService]
    });
  });

  it('should ...', inject([AuthBaseService], (service: AuthBaseService) => {
    expect(service).toBeTruthy();
  }));
});
