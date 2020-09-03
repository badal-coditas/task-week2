import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';
import { USER_LOGGED_FLAG } from '../../constant-variable/constants';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submited: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private userHttp: UserHttpService,
    private router: Router) { }

  ngOnInit() {

    if (this.userHttp.getValueFromLocalStorage(USER_LOGGED_FLAG) == "true") {
      this.router.navigateByUrl('/home');
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }
  resetForm() {
    this.loginForm.reset()
  }
  login() {
    if (this.loginForm.valid) {
      this.submited = false;
      this.userHttp.checkLoginData(this.f.email.value, this.f.password.value).subscribe((resData) => {
        var tempArray: any = resData;
        if (tempArray.length != 0) {
          localStorage.setItem("loggedIn", "true");
          this.loginForm.reset();
          this.router.navigateByUrl('/home');
        } else {
          this.submited = true;
        }
      })
    } else {
      this.submited = true;
    }
  }

}
