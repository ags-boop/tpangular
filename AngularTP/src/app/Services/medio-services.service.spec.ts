import { TestBed } from '@angular/core/testing';

import { MedioServicesService } from './medio-services.service';

describe('MedioServicesService', () => {
  let service: MedioServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedioServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
