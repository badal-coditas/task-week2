import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { VariablesActions } from '../../constant-variable/constants';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userHttp: UserHttpService,
    private router: Router,
    private store: Store<any>
  ) {}
  flagForUserLogged: boolean;
  ngOnInit(): void {
    if (
      this.userHttp.getValueFromLocalStorage(
        VariablesActions.USER_LOGGED_FLAG
      ) == 'true'
    ) {
      this.flagForUserLogged = true;
    } else {
      this.flagForUserLogged = false;
    }

    this.store.subscribe((state) => {
      console.log(state, 'header');
      if (state.componetReducer.loggedStatus) {
        this.flagForUserLogged = true;
      } else if (!state.componetReducer.loggedStatus) {
        localStorage.setItem(VariablesActions.USER_LOGGED_FLAG, 'false');
        this.flagForUserLogged = false;
      }
    });
  }

  logout() {
    this.store.dispatch({ type: VariablesActions.USER_LOGGED_OUT });
    this.router.navigateByUrl('login');
  }
  themeChanged(e) {
    if (e.target.value == 'dark') {
      this.setThemeColor(
        '#3f3f40',
        '#e4e4e4',
        '#ffffff',
        '#6f6f9d',
        '#525252',
        '#585858',
        '#ffffff',
        '#3f3f40',
        '#e4e4e4'
      );
    } else {
      this.setThemeColor(
        '#203158',
        '#ffffff',
        '#ffffff',
        '#6f6f9d',
        '#e8e8e8',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#000000'
      );
    }
  }
  setThemeColor(
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    color8,
    color9
  ) {
    document.documentElement.style.setProperty('--theme-bg-color', color1);
    document.documentElement.style.setProperty('--theme-text-color', color2);
    document.documentElement.style.setProperty('--theme-card-bg-color', color3);
    document.documentElement.style.setProperty('--theme-card-bg-text', color4);
    document.documentElement.style.setProperty('--theme-even-list-bg', color5);
    document.documentElement.style.setProperty('--theme-odd-list-bg', color6);
    document.documentElement.style.setProperty(
      '--theme-button-text-color',
      color7
    );
    document.documentElement.style.setProperty('--theme-body', color8);
    document.documentElement.style.setProperty(
      '--theme-text-color-opp',
      color9
    );
  }
}
