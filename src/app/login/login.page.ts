import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  signUp(){
    alert("Users will be able to make an account with a email and password");
  }

  signIn(){
    this.router.navigateByUrl('/tabs/tab1');
  }

}
