import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPawdComponent } from './reset-pawd.component';

describe('ResetPawdComponent', () => {
  let component: ResetPawdComponent;
  let fixture: ComponentFixture<ResetPawdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPawdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPawdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
