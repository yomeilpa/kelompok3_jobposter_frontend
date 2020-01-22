import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedcandidateComponent } from './approvedcandidate.component';

describe('ApprovedcandidateComponent', () => {
  let component: ApprovedcandidateComponent;
  let fixture: ComponentFixture<ApprovedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
