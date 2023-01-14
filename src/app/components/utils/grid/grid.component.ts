import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Card } from 'src/app/models/mtgcardapi.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Input() items: Card[] = [];

  displayedColumns: string[] = ['id', 'name', 'type', 'artist', 'details'];

  dataSource!: MatTableDataSource<Card>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.items);
    console.log(this.dataSource);
  }

  ngOnInit(): void {}
}
