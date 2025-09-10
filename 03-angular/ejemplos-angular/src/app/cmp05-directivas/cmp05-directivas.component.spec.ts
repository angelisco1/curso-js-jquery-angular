import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05DirectivasComponent } from './cmp05-directivas.component';

describe('Cmp05DirectivasComponent', () => {
  let component: Cmp05DirectivasComponent;
  let fixture: ComponentFixture<Cmp05DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp05DirectivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp05DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
