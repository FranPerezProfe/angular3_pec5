import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Card } from 'src/app/models/mtgcardapi.interface';
import { MtgcardsService } from 'src/app/services/mtgcards.service';

@Component({
  selector: 'app-mtgcards',
  templateUrl: './mtgcards.component.html',
  styleUrls: ['./mtgcards.component.css'],
  animations: [
    trigger('cardsAnimation', [
      state('waiting', style({ opacity: 1 })),
      state('loaded', style({ opacity: 1 })),
      transition('waiting => loaded', [
        query('.mtg_card', [
          style({ opacity: 0, transform: 'translateX(-300px)' }),
          stagger(5, [
            animate(
              '1500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class MtgcardsComponent implements OnInit {
  mtgcards: Card[] = [];
  animationState: string;
  viewType: string;

  loading: boolean = true;

  constructor(private mtgService: MtgcardsService) {
    this.animationState = 'waiting';
    this.viewType = 'cards';

    this.mtgService.getAllMtgcards().subscribe((cards: Card[]) => {
      this.mtgcards = cards;
      if (this.mtgcards) {
        this.loading = false;
        this.animationState = 'loaded';
      }
    });
  }

  ngOnInit(): void {}

  changeView(viewType: string) {
    this.viewType = viewType;
  }
}
