import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerCampaignComponent } from './trigger-campaign.component';

describe('TriggerCampaignComponent', () => {
  let component: TriggerCampaignComponent;
  let fixture: ComponentFixture<TriggerCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
