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
    console.log(
      typeof this.userHttp.getValueFromLocalStorage(
        VariablesActions.USER_LOGGED_FLAG
      )
    );
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
    this.store.subscribe((state) => {
      if (state.userLoggedReducer?.loggedStatus) {
        localStorage.setItem('loggedIn', state.userLoggedReducer.loggedStatus);
      }
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
          var responseData: any = resData;
          if (responseData.length != 0) {
            localStorage.setItem(
              VariablesActions.LOCAL_STORAGE_USER_EMAIL,
              this.f.email.value
            );
            this.store.dispatch({ type: VariablesActions.USER_LOGGED_IN });
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
