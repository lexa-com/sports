import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsBetsComponent } from './markets-bets.component';

describe('MarketsBetsComponent', () => {
  let component: MarketsBetsComponent;
  let fixture: ComponentFixture<MarketsBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketsBetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketsBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
