import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsterDetailsComponent } from './tipster-details.component';

describe('TipsterDetailsComponent', () => {
  let component: TipsterDetailsComponent;
  let fixture: ComponentFixture<TipsterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
