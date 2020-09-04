import { Action } from '@ngrx/store';
import { CardModal } from '../modal/card.modal';
import { VariablesActions } from '../../../constant-variable/constants';

export class LoadCard implements Action {
    readonly type = VariablesActions.CARDS_LOAD;
}
export class LoadCardSuccess implements Action {
    readonly type = VariablesActions.CARDS_LOAD_SUCCESS;
    constructor(public payload: CardModal[]) { }
}
export class LoadCardFailed implements Action {
    readonly type = VariablesActions.CARDS_LOAD_FAILED;
    constructor(public payload: CardModal[]) { }
}
export class AddCard implements Action {
    readonly type = VariablesActions.CARDS_ADD;
    constructor(public payload: CardModal[], public id: any) { }
}
export class AddCardSuccess implements Action {
    readonly type = VariablesActions.CARDS_ADD_SUCCESS;
    constructor(public payload: CardModal[]) { }
}
export class DeleteCard implements Action {
    readonly type = VariablesActions.CARDS_DELETE;
    constructor(public id: any) { }
}

export type CardActions = LoadCard | LoadCardSuccess | LoadCardFailed
    | AddCard | AddCardSuccess | DeleteCard;
