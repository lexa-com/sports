import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPicksComponent } from './combo-picks.component';

describe('ComboPicksComponent', () => {
  let component: ComboPicksComponent;
  let fixture: ComponentFixture<ComboPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboPicksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
