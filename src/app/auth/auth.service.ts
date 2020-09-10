import { Injectable } from '@angular/core';
import { VariablesActions } from '../constant-variable/constants';
@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    if (
      localStorage.getItem(VariablesActions.USER_LOGGED_FLAG).toString() ==
      'true'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
