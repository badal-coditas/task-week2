import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { VariablesActions } from 'src/app/constant-variable/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  registeredFlag: boolean = false;
  registerFailed: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userHttp: UserHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    if (
      this.userHttp.getValueFromLocalStorage(
        VariablesActions.USER_LOGGED_FLAG.toString()
      ) == 'true'
    ) {
      this.router.navigateByUrl('/home');
    }
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  registerUser() {
    if (this.registerForm.valid) {
      const userData = {
        id: '',
        email: this.f.email.value,
        password: this.f.password.value,
        name: this.f.fullName.value,
        number: this.f.number.value,
      };

      this.userHttp
        .checkLoginData(this.f.email.value, this.f.password.value)
        .subscribe((resData) => {
          var responseData: any = resData;
          if (responseData.length == 0) {
            this.userHttp.registerUser(userData).subscribe((resData) => {
              this.registeredFlag = true;
              this.registerForm.reset();
              this.submitted = false;
              this.registerFailed = false;
            });
          } else {
            this.registerFailed = true;
          }
        });
    } else {
      this.submitted = true;
    }
  }
}
