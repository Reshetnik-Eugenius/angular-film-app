import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-film-item-dialog',
  templateUrl: './film-item-dialog.component.html',
  styleUrls: ['./film-item-dialog.component.scss']
})
export class FilmItemDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FilmItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // data: film-item-model
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){}
}
