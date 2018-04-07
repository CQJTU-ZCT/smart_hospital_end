import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySysComponent } from './pay-sys.component';

describe('PaySysComponent', () => {
  let component: PaySysComponent;
  let fixture: ComponentFixture<PaySysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
