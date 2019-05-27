import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loading: boolean;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loading = false;
  }

  async onSignin(form: NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    const res = await this.authService.signinUser(email, password);
    if (res)
      this.router.navigate(['../../home'], { relativeTo: this.route });
    else
      this.loading = false;

  }

}
