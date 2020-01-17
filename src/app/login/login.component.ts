import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = [];
  notifyMessage = '';

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe((params) => {
      if (params.registered === 'success') {
        this.notifyMessage = 'You have been successfully registered, you can log in now';
      }
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid
      && (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }
  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe((token) => {
      this.router.navigate(['/']);

    }, (errorResponse) => {
      this.errors = errorResponse.error.errors;
    });
  }

}
