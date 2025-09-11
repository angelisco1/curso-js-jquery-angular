import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendehumoCardComponent } from './vendehumo-card.component';

describe('VendehumoCardComponent', () => {
  let component: VendehumoCardComponent;
  let fixture: ComponentFixture<VendehumoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendehumoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendehumoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
