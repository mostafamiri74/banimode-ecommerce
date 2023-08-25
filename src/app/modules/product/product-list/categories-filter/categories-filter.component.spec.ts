import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFilterComponent } from './categories-filter.component';

describe('CategoriesFilterComponent', () => {
  let component: CategoriesFilterComponent;
  let fixture: ComponentFixture<CategoriesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesFilterComponent]
    });
    fixture = TestBed.createComponent(CategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
