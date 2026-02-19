import { TestBed } from '@angular/core/testing';

import { DatosEmpresa } from './datos-empresa';

describe('DatosEmpresa', () => {
  let service: DatosEmpresa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEmpresa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
