import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Store } from '@ngrx/store';
import * as CardActions from './store/card.actions'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  allCards: any;
  constructor(private userHttp: UserHttpService, private store: Store<any>) { }

  ngOnInit(): void {
    // this.userHttp.getAllCardsData().subscribe(res => {
    //   this.allCards = res;
    //   // console.log(this.allCards, res);
    // });

    this.store.dispatch(new CardActions.LoadCard());
    this.store.subscribe(state => {
      console.log(state.reducer.card, state, "subscribe");
      this.allCards = state.reducer.card;
    });
  }

}