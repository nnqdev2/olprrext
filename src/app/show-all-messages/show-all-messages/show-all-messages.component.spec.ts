import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMessagesComponent } from './show-all-messages.component';

describe('ShowAllMessagesComponent', () => {
  let component: ShowAllMessagesComponent;
  let fixture: ComponentFixture<ShowAllMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
