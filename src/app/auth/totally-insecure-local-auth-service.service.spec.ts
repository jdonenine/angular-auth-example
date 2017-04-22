import { TestBed, inject } from '@angular/core/testing';

import { TotallyInsecureLocalAuthServiceService } from './totally-insecure-local-auth-service.service';

describe('TotallyInsecureLocalAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotallyInsecureLocalAuthServiceService]
    });
  });

  it('should ...', inject([TotallyInsecureLocalAuthServiceService], (service: TotallyInsecureLocalAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
