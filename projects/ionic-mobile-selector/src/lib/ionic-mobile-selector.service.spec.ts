import { TestBed } from '@angular/core/testing';

import { IonicMobileSelectorService } from './ionic-mobile-selector.service';

describe('IonicMobileSelectorService', () => {
  let service: IonicMobileSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicMobileSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
