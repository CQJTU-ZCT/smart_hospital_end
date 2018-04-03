import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTimeChartComponent } from './in-time-chart.component';

describe('InTimeChartComponent', () => {
  let component: InTimeChartComponent;
  let fixture: ComponentFixture<InTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
