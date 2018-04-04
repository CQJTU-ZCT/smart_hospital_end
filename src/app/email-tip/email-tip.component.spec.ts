import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTipComponent } from './email-tip.component';

describe('EmailTipComponent', () => {
  let component: EmailTipComponent;
  let fixture: ComponentFixture<EmailTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
