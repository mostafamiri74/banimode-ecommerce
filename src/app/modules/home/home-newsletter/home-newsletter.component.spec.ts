import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsletterComponent } from './home-newsletter.component';

describe('HomeNewsletterComponent', () => {
  let component: HomeNewsletterComponent;
  let fixture: ComponentFixture<HomeNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
