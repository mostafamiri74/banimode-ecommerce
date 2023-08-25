import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsFilterComponent } from './brands-filter.component';

describe('BrandsFilterComponent', () => {
  let component: BrandsFilterComponent;
  let fixture: ComponentFixture<BrandsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsFilterComponent]
    });
    fixture = TestBed.createComponent(BrandsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
