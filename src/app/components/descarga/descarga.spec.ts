import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Descarga } from './descarga';

describe('Descarga', () => {
  let component: Descarga;
  let fixture: ComponentFixture<Descarga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Descarga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Descarga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
