import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecandidateComponent } from './homepagecandidate.component';

describe('HomepagecandidateComponent', () => {
  let component: HomepagecandidateComponent;
  let fixture: ComponentFixture<HomepagecandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagecandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
