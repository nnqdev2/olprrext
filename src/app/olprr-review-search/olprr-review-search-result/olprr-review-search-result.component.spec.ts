import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlprrReviewSearchResultComponent } from './olprr-review-search-result.component';

describe('OlprrReviewSearchResultComponent', () => {
  let component: OlprrReviewSearchResultComponent;
  let fixture: ComponentFixture<OlprrReviewSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlprrReviewSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlprrReviewSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
