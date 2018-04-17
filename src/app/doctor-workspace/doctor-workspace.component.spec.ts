import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorWorkspaceComponent } from './doctor-workspace.component';

describe('DoctorWorkspaceComponent', () => {
  let component: DoctorWorkspaceComponent;
  let fixture: ComponentFixture<DoctorWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
