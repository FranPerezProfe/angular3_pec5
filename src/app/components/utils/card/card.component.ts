import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/mtgcardapi.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: Card = {
    id: '',
    name: '',
    type: '',
    rarity: '',
    artist: '',
    imageUrl: '',
    manaCost: '',
    cmc: 0,
    types: [],
    set: '',
    setName: '',
    text: '',
    number: '',
    layout: '',
    multiverseid: '',
    printings: [],
    originalText: '',
    originalType: '',
    legalities: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
