import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tui-confirm-dialog',
  templateUrl: './tui-confirm-dialog.component.html',
  styleUrls: ['./tui-confirm-dialog.component.css']
})
export class TuiConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
