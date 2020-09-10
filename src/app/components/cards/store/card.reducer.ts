import { VariablesActions } from '../../../constant-variable/constants';
import { CardActions } from './card.actions';
import { CardModal } from '../modal/card.modal';
import * as fromRoot from '../state/card.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CardState {
  card: CardModal[];
  message: any;
  error:any;
  DbError:any;
}

export interface AppSate extends fromRoot.AppState {
  card: CardState;
}

export const initialCardState: CardState = {
  card: [],
  message: null,
  error:'',
  DbError:'',
};

export function cardReducer(
  state = initialCardState,
  action: CardActions
): CardState {
  switch (action.type) {
    case VariablesActions.CARDS_LOAD: {
      return { ...state };
    }
    case VariablesActions.CARDS_LOAD_ALL: {
      return { ...state };
    }

    case VariablesActions.CARDS_LOAD_SUCCESS: {
      return { ...state, card: action.payload };
    }
    case VariablesActions.CARDS_LOAD_FAILED: {
      return { ...state, ...{error:action.error} };
    }
    case VariablesActions.CARDS_ADD: {
      return { ...state };
    }
    case VariablesActions.CARDS_ADD_SUCCESS: {
      return { ...state, ...{ message: action.message } };
    }
    case VariablesActions.CARDS_DELETE: {
      return { ...state };
    }
    case VariablesActions.CARDS_DELETE_SUCCESS: {
      return { ...state, ...{ message: action.message } };
    }
    case VariablesActions.DB_INIT: {
      return { ...state};
    }
    case VariablesActions.DB_FAILED: {
      return {...state, ...{DbError:action.error}};
    }
    case VariablesActions.DB_SUCCESS: {
      return { ...state};
    }
    default:
      return state;
  }
}

const getCardFeaturestate = createFeatureSelector<CardState>('cardReducers');
export const getCards = createSelector(
  getCardFeaturestate,
  (state: CardState) => state.card
);
export const getMessage = createSelector(
  getCardFeaturestate,
  (state: CardState) => state.message
);
export const getErrorMessage = createSelector(
  getCardFeaturestate,
  (state: CardState) => state.error
);
export const getDbError = createSelector(
  getCardFeaturestate,
  (state: CardState) => state.DbError
);
