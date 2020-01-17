import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData: any = {};
  errors: any = [];
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.formData).subscribe(() => {
        this.router.navigate(['/login', {
          registered: 'success'
        }]);
    }, (errorResponse) => {
        console.log(errorResponse);
        this.errors = errorResponse.error.errors;
    }
    );
  }

}
