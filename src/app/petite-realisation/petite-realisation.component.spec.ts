import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteRealisationComponent } from './petite-realisation.component';

describe('PetiteRealisationComponent', () => {
  let component: PetiteRealisationComponent;
  let fixture: ComponentFixture<PetiteRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetiteRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiteRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
