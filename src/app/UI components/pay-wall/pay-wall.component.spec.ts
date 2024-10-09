import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWallComponent } from './pay-wall.component';

describe('PayWallComponent', () => {
  let component: PayWallComponent;
  let fixture: ComponentFixture<PayWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayWallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
