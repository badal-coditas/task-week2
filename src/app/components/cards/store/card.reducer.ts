import { VariablesActions } from '../../../constant-variable/constants';
import { CardActions } from './card.actions'
import { CardModal } from '../modal/card.modal';
import * as fromRoot from '../state/card.state';

export interface CardState {
    card: CardModal[]
}

export interface AppSate extends fromRoot.AppState {
    card: CardState;
}

export const initialCardState: CardState = {
    card: []
}

export function cardReducer(state = initialCardState, action: CardActions): CardState {
    console.log(action, "secondReducer");
    switch (action.type) {
        case VariablesActions.CARDS_LOAD: {
            return { ...state }
        }
        case VariablesActions.CARDS_LOAD_SUCCESS: {
            return { ...state, card: action.payload }
        }
        case VariablesActions.CARDS_LOAD_FAILED: {
            return { ...state, card: [] }
        }
        default:
            return state;
    }

}