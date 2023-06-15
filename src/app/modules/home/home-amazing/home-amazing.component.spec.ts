import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAmazingComponent } from './home-amazing.component';

describe('HomeAmazingComponent', () => {
  let component: HomeAmazingComponent;
  let fixture: ComponentFixture<HomeAmazingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAmazingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAmazingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
