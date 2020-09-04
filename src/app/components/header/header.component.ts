import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { VariablesActions } from '../../constant-variable/constants';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userHttp: UserHttpService,
    private router: Router,
    private store: Store<any>) { }
  flagForUserLogged: boolean;
  ngOnInit(): void {
    if (this.userHttp.getValueFromLocalStorage(VariablesActions.USER_LOGGED_FLAG) == "true") {
      this.flagForUserLogged = true;
    } else {
      this.flagForUserLogged = false;
    }

    this.store.subscribe(state => {
      // console.log(state, "header")
      if (state.componetReducer.loggedStatus) {
        this.flagForUserLogged = true;
      } else if (!state.componetReducer.loggedStatus) {
        localStorage.setItem(VariablesActions.USER_LOGGED_FLAG, "false");
        this.flagForUserLogged = false;

      }
    })

  }

  logout() {
    this.store.dispatch({ type: VariablesActions.USER_LOGGED_OUT });
    this.router.navigateByUrl('login');
  }
}
