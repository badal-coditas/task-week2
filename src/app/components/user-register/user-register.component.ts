import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  registerdFlag: boolean = false;
  constructor(private formBuilder: FormBuilder, private userHttp: UserHttpService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  registerUser() {
    console.log(this.registerForm);

    if (this.registerForm.valid) {
      const userData = {
        "id": '',
        "email": this.f.email.value,
        "password": this.f.password.value,
        "name": this.f.fullName.value,
        "number": this.f.number.value
      }
      console.log(userData);
      this.userHttp.registerUser(userData).subscribe(resData => {
        this.registerdFlag = true;
        this.registerForm.reset();
        this.submitted = false;
      })
    } else {
      this.submitted = true;
    }

  }
}