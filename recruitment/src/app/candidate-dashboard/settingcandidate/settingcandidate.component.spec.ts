import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingcandidateComponent } from './settingcandidate.component';

describe('SettingcandidateComponent', () => {
  let component: SettingcandidateComponent;
  let fixture: ComponentFixture<SettingcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
