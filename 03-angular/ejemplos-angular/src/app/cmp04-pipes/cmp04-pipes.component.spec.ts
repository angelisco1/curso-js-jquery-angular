import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04PipesComponent } from './cmp04-pipes.component';

describe('Cmp04PipesComponent', () => {
  let component: Cmp04PipesComponent;
  let fixture: ComponentFixture<Cmp04PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp04PipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp04PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
