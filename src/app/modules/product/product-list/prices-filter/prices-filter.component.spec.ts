import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesFilterComponent } from './prices-filter.component';

describe('PricesFilterComponent', () => {
  let component: PricesFilterComponent;
  let fixture: ComponentFixture<PricesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricesFilterComponent]
    });
    fixture = TestBed.createComponent(PricesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
