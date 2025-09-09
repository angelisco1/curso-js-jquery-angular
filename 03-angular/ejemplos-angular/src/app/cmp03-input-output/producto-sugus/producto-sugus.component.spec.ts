import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSugusComponent } from './producto-sugus.component';

describe('ProductoSugusComponent', () => {
  let component: ProductoSugusComponent;
  let fixture: ComponentFixture<ProductoSugusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSugusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSugusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
