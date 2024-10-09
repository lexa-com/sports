import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumFivePlusComponent } from './premium-five-plus.component';

describe('PremiumFivePlusComponent', () => {
  let component: PremiumFivePlusComponent;
  let fixture: ComponentFixture<PremiumFivePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumFivePlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumFivePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
