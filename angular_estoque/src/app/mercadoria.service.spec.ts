import { TestBed } from '@angular/core/testing';

import { MercadoriaService } from './mercadoria.service';

describe('MercadoriaService', () => {
  let service: MercadoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
