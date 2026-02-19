import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagasImportantes } from './plagas-importantes';

describe('PlagasImportantes', () => {
  let component: PlagasImportantes;
  let fixture: ComponentFixture<PlagasImportantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlagasImportantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagasImportantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
