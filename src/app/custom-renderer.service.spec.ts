import { TestBed } from '@angular/core/testing';

import { CustomRendererService } from './custom-renderer.service';

describe('CustomRendererService', () => {
  let service: CustomRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
