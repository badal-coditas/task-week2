import { VariablesActions } from '../../constant-variable/constants';

const initialState = {
  loggedStatus:
    localStorage.getItem(VariablesActions.USER_LOGGED_FLAG) || false,
};
export function ComponentReducer(state = initialState, action: any) {
  switch (action.type) {
    case VariablesActions.USER_LOGGED_IN: {
      return {
        loggedStatus: true,
      };
    }

    case VariablesActions.USER_LOGGED_OUT: {
      return {
        loggedStatus: false,
      };
    }

    default: {
      return state;
    }
  }
}
