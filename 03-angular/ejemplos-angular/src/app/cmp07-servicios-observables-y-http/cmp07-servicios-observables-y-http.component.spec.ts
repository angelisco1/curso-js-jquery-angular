import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07ServiciosObservablesYHttpComponent } from './cmp07-servicios-observables-y-http.component';

describe('Cmp07ServiciosObservablesYHttpComponent', () => {
  let component: Cmp07ServiciosObservablesYHttpComponent;
  let fixture: ComponentFixture<Cmp07ServiciosObservablesYHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp07ServiciosObservablesYHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp07ServiciosObservablesYHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
