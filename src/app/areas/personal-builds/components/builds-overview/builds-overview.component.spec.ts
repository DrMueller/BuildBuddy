import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsOverviewComponent } from './builds-overview.component';

describe('BuildsOverviewComponent', () => {
  let component: BuildsOverviewComponent;
  let fixture: ComponentFixture<BuildsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
