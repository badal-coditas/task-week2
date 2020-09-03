import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { USER_LOGGED_FLAG } from '../../constant-variable/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userHttp: UserHttpService,
    private router: Router) { }
  flagForUserLogged: boolean;
  ngOnInit(): void {
    if (this.userHttp.getValueFromLocalStorage(USER_LOGGED_FLAG) == "true") {
      this.flagForUserLogged = true;
    } else {
      this.flagForUserLogged = false;
    }
  }

  logout() {
    localStorage.setItem(USER_LOGGED_FLAG, "false");
    this.flagForUserLogged = false;
    this.router.navigateByUrl('login');
  }
}
