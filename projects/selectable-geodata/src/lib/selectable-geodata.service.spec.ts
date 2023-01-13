import { TestBed } from '@angular/core/testing';

import { SelectableGeodataService } from './selectable-geodata.service';

describe('SelectableGeodataService', () => {
  let service: SelectableGeodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectableGeodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
