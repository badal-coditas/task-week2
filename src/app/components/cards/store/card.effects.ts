import { Injectable } from '@angular/core';

import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

import { UserHttpService } from '../../../user-http/user-http.service';
import * as CardActions from './card.actions';
import { CardModal } from '../modal/card.modal';
import { VariablesActions } from '../../../constant-variable/constants'

@Injectable()
export class CardEffect {

    constructor(private actions$: Actions,
        private httpService: UserHttpService) { }

    @Effect() loadCard$: Observable<Action> = this.actions$.pipe(
        ofType<CardActions.LoadCard>(VariablesActions.CARDS_LOAD)
        , mergeMap(
            (actions: CardActions.LoadCard) =>
                this.httpService.getAllCardsData().pipe(map(
                    (card: CardModal[]) =>
                        // console.log(actions, "hello effect", card);
                        new CardActions.LoadCardSuccess(card)

                ),
                    catchError(err => of(new CardActions.LoadCardFailed(err))))
        )
    );
}