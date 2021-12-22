import { TestBed } from '@angular/core/testing';

import { ServerKommunikationService } from './server-kommunikation.service';

describe('ServerKommunikationService', () => {
  let service: ServerKommunikationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerKommunikationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
