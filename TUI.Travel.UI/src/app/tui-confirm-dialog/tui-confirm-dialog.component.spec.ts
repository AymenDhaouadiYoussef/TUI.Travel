import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuiConfirmDialogComponent } from './tui-confirm-dialog.component';

describe('TuiConfirmDialogComponent', () => {
  let component: TuiConfirmDialogComponent;
  let fixture: ComponentFixture<TuiConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuiConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuiConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
