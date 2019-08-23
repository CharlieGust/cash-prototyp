import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxfreePage } from './taxfree.page';

describe('TaxfreePage', () => {
  let component: TaxfreePage;
  let fixture: ComponentFixture<TaxfreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxfreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxfreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
