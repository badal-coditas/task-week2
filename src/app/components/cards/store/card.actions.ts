import { Action } from '@ngrx/store';
import { CardModal } from '../modal/card.modal';
import { VariablesActions } from '../../../constant-variable/constants';

export class LoadCard implements Action {
  readonly type = VariablesActions.CARDS_LOAD;
}
export class LoadCardSuccess implements Action {
  readonly type = VariablesActions.CARDS_LOAD_SUCCESS;
  constructor(public payload: CardModal[]) {}
}
export class LoadCardFailed implements Action {
  readonly type = VariablesActions.CARDS_LOAD_FAILED;
  constructor(public error: any) {}
}
export class AddCard implements Action {
  readonly type = VariablesActions.CARDS_ADD;
  constructor(public payload: CardModal[], public id: any) {}
}
export class AddCardSuccess implements Action {
  readonly type = VariablesActions.CARDS_ADD_SUCCESS;
  constructor(public message: String) {}
}
export class DeleteCard implements Action {
  readonly type = VariablesActions.CARDS_DELETE;
  constructor(public id: any) {}
}
export class DeleteCardSuccess implements Action {
  readonly type = VariablesActions.CARDS_DELETE_SUCCESS;
  constructor(public message: any) {}
}

export class LoadCardForAll implements Action {
  readonly type = VariablesActions.CARDS_LOAD_ALL;
}

export class DbInit implements Action {
  readonly type = VariablesActions.DB_INIT;
}
export class DbSuccess implements Action {
  readonly type = VariablesActions.DB_SUCCESS;
}
export class DbFailed implements Action {
  readonly type = VariablesActions.DB_FAILED;
  constructor(public error:any){}
}
export type CardActions =
  | LoadCard
  | LoadCardSuccess
  | LoadCardFailed
  | AddCard
  | AddCardSuccess
  | DeleteCard
  | LoadCardForAll
  | DeleteCardSuccess|
  DbInit | DbSuccess | DbFailed;
