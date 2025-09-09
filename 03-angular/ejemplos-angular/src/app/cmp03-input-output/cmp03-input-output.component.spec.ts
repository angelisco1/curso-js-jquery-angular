import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03InputOutputComponent } from './cmp03-input-output.component';

describe('Cmp03InputOutputComponent', () => {
  let component: Cmp03InputOutputComponent;
  let fixture: ComponentFixture<Cmp03InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp03InputOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp03InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
