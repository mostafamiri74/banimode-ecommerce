import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrandsComponent } from './home-brands.component';

describe('HomeBrandsComponent', () => {
  let component: HomeBrandsComponent;
  let fixture: ComponentFixture<HomeBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
