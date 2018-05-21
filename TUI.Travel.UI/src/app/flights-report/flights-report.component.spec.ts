import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsReportComponent } from './flights-report.component';

describe('FlightsReportComponent', () => {
  let component: FlightsReportComponent;
  let fixture: ComponentFixture<FlightsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
