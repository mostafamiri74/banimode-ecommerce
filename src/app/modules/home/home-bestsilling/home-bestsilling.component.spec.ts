import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestsillingComponent } from './home-bestsilling.component';

describe('HomeBestsillingComponent', () => {
  let component: HomeBestsillingComponent;
  let fixture: ComponentFixture<HomeBestsillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBestsillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBestsillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
