import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBuildsComponent } from './personal-builds.component';

describe('PersonalBuildsComponent', () => {
  let component: PersonalBuildsComponent;
  let fixture: ComponentFixture<PersonalBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
