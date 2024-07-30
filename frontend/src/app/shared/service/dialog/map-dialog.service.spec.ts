import { TestBed } from '@angular/core/testing';

import { MapDialogService } from './map-dialog.service';

describe('MapDialogService', () => {
  let service: MapDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
