import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedcandidateComponent } from './invitedcandidate.component';

describe('InvitedcandidateComponent', () => {
  let component: InvitedcandidateComponent;
  let fixture: ComponentFixture<InvitedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
