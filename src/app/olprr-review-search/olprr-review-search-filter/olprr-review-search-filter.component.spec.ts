import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlprrReviewSearchFilterComponent } from './olprr-review-search-filter.component';

describe('OlprrReviewSearchFilterComponent', () => {
  let component: OlprrReviewSearchFilterComponent;
  let fixture: ComponentFixture<OlprrReviewSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlprrReviewSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlprrReviewSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
