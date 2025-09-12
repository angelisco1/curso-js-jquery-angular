import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVendehumoComponent } from './detalle-vendehumo.component';

describe('DetalleVendehumoComponent', () => {
  let component: DetalleVendehumoComponent;
  let fixture: ComponentFixture<DetalleVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVendehumoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
