import { TestBed, inject } from '@angular/core/testing';

import { AlgoritmoGeneticoService } from './algoritmo-genetico.service';

describe('AlgoritmoGeneticoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlgoritmoGeneticoService]
    });
  });

  it('should be created', inject([AlgoritmoGeneticoService], (service: AlgoritmoGeneticoService) => {
    expect(service).toBeTruthy();
  }));
});
