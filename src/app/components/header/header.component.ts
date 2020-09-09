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
      if (state.userLoggedReducer.loggedStatus) {
        this.flagForUserLogged = true;
      } else if (!state.userLoggedReducer.loggedStatus) {
        localStorage.setItem(VariablesActions.USER_LOGGED_FLAG, 'false');
        this.flagForUserLogged = false;
        localStorage.removeItem(VariablesActions.LOCAL_STORAGE_USER_EMAIL);
      }
    });
  }

  logout() {
    this.store.dispatch({ type: VariablesActions.USER_LOGGED_OUT });
    this.router.navigateByUrl('login');
  }
  themeChanged(e: any) {
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
    color1: string,
    color2: string,
    color3: string,
    color4: string,
    color5: string,
    color6: string,
    color7: string,
    color8: string,
    color9: string
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
