import { Injectable } from '@angular/core';

import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

import { UserHttpService } from '../../../user-http/user-http.service';
import * as CardActions from './card.actions';
import { CardModal } from '../modal/card.modal';
import { VariablesActions } from '../../../constant-variable/constants';

@Injectable()
export class CardEffect {
  constructor(
    private actions$: Actions,
    private httpService: UserHttpService
  ) {}

  @Effect() loadCard$: Observable<Action> = this.actions$.pipe(
    ofType<CardActions.LoadCard>(VariablesActions.CARDS_LOAD),
    mergeMap((actions: CardActions.LoadCard) =>
      this.httpService.getAllCardsDataFor().pipe(
        map((card: CardModal[]) => new CardActions.LoadCardSuccess(card)),
        catchError((err) => of(new CardActions.LoadCardFailed(err)))
      )
    )
  );

  @Effect() loadAllCard$: Observable<Action> = this.actions$.pipe(
    ofType<CardActions.LoadCardForAll>(VariablesActions.CARDS_LOAD_ALL),
    mergeMap((actions: CardActions.LoadCardForAll) =>
      this.httpService.getAllCardsData().pipe(
        map((card: CardModal[]) => new CardActions.LoadCardSuccess(card)),
        catchError((err) => of(new CardActions.LoadCardFailed(err)))
      )
    )
  );

  @Effect() AddCard$: Observable<Action> = this.actions$.pipe(
    ofType<CardActions.AddCard>(VariablesActions.CARDS_ADD),
    mergeMap((actions: CardActions.AddCard) =>
      this.httpService
        .addAndUpdateProductCard(actions.payload, actions.id)
        .pipe(
          map(
            (card: CardModal[]) =>
              new CardActions.AddCardSuccess(actions.payload)
          ),
          catchError((err) => of(new CardActions.LoadCardFailed(err)))
        )
    )
  );

  @Effect() DeleteCard$: Observable<Action> = this.actions$.pipe(
    ofType<CardActions.DeleteCard>(VariablesActions.CARDS_DELETE),
    mergeMap((actions: CardActions.DeleteCard) =>
      this.httpService.deleteCard(actions.id).pipe(
        map((card: CardModal[]) => new CardActions.LoadCard()),
        catchError((err) => of(new CardActions.LoadCardFailed(err)))
      )
    )
  );
}
