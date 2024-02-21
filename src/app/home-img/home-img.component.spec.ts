import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImgComponent } from './home-img.component';

describe('HomeImgComponent', () => {
  let component: HomeImgComponent;
  let fixture: ComponentFixture<HomeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
