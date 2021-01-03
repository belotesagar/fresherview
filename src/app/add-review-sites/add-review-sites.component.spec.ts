import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewSitesComponent } from './add-review-sites.component';

describe('AddReviewSitesComponent', () => {
  let component: AddReviewSitesComponent;
  let fixture: ComponentFixture<AddReviewSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
