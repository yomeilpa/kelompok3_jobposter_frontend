import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobposterComponent } from './searchjobposter.component';

describe('SearchjobposterComponent', () => {
  let component: SearchjobposterComponent;
  let fixture: ComponentFixture<SearchjobposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjobposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
