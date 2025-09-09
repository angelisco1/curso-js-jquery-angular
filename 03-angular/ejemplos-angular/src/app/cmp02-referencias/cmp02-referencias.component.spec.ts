import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02ReferenciasComponent } from './cmp02-referencias.component';

describe('Cmp02ReferenciasComponent', () => {
  let component: Cmp02ReferenciasComponent;
  let fixture: ComponentFixture<Cmp02ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp02ReferenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp02ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
