import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsProjectComponent } from './my-projects-project.component';

describe('MyProjectsProjectComponent', () => {
  let component: MyProjectsProjectComponent;
  let fixture: ComponentFixture<MyProjectsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectsProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
