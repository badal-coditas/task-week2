import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Store } from '@ngrx/store';
import * as CardActions from './store/card.actions';
import { IndividualCard } from './card-lit-element/individual-card';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  allCards: any;
  constructor(private userHttp: UserHttpService, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new CardActions.LoadCard());
    this.store.subscribe((state) => {
      this.allCards = state.reducer.card;
    });
  }
}
