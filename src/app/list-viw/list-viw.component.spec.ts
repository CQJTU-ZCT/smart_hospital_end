import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViwComponent } from './list-viw.component';

describe('ListViwComponent', () => {
  let component: ListViwComponent;
  let fixture: ComponentFixture<ListViwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
