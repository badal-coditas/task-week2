import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';
import { VariablesActions } from '../../constant-variable/constants';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userHttp: UserHttpService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit() {
    if (
      this.userHttp.getValueFromLocalStorage(
        VariablesActions.USER_LOGGED_FLAG
      ) == 'true'
    ) {
      this.router.navigateByUrl('/home');
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  resetForm() {
    this.loginForm.reset();
    return true;
  }
  login() {
    if (this.loginForm.valid) {
      this.submitted = false;
      this.userHttp
        .checkLoginData(this.f.email.value, this.f.password.value)
        .subscribe((resData) => {
          var tempArray: any = resData;
          if (tempArray.length != 0) {
            this.store.dispatch({ type: VariablesActions.USER_LOGGED_IN });
            this.store.subscribe((state) => {
              localStorage.setItem(
                'loggedIn',
                state.componetReducer.loggedStatus
              );
            });

            this.loginForm.reset();
            this.router.navigateByUrl('/home');
          } else {
            this.submitted = true;
          }
        });
    } else {
      this.submitted = true;
    }
  }
}
