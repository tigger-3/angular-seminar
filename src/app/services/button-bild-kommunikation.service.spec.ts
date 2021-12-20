import { TestBed } from '@angular/core/testing';

import { ButtonBildKommunikationService } from './button-bild-kommunikation.service';

describe('ButtonBildKommunikationService', () => {
  let service: ButtonBildKommunikationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonBildKommunikationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
