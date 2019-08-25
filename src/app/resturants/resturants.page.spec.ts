import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsPage } from './resturants.page';

describe('ResturantsPage', () => {
  let component: ResturantsPage;
  let fixture: ComponentFixture<ResturantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
