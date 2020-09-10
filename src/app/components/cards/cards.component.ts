import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Store, select } from '@ngrx/store';
import * as CardActions from './store/card.actions';
import './card-lit-element/individual-card';
import { Observable } from 'rxjs';
import * as fromCard from './store/card.reducer';
import { CardModal } from './modal/card.modal';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  allCards$: Observable<CardModal[]>;
  errorMessage$:Observable<any>;
  errorMessage:any;
  httpError:boolean = false;
  constructor(
    private userHttp: UserHttpService,
    private store: Store<fromCard.AppSate>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new CardActions.LoadCardForAll());
    this.allCards$ = this.store.pipe(select(fromCard.getCards));
  }
}
