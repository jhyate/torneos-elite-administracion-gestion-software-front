import { TestBed } from '@angular/core/testing';

import { VisibilityComponentsService } from './visibility.components.service';

describe('VisibilityComponentsService', () => {
  let service: VisibilityComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
