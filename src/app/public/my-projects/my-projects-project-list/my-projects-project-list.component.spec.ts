import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsProjectListComponent } from './my-projects-project-list.component';

describe('MyProjectsProjectListComponent', () => {
  let component: MyProjectsProjectListComponent;
  let fixture: ComponentFixture<MyProjectsProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectsProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
