import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthed: boolean = !!JSON.parse(localStorage.getItem('currentUser'));
  constructor(private auth: AuthService, private router: Router) {
    auth.getIsAuthed.subscribe(authState => {
      this.isAuthed = authState;
    });
  }

  ngOnInit() {
    console.log(this.isAuthed);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
