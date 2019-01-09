import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router, ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  invalidLogin : boolean = false;
  noEmailReset : boolean = false;
  noEmail : boolean = false;
  emailAddress : string = '';
  password : string = '';
  loading : boolean = false;
  submitted : boolean = false;

  returnUrl : string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {}
  
  ngOnInit () {
    // reset login status

  this.authenticationService.logout();
  
  // get return url from route parameters or default to '/dashboard'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

  }

  LoginClicked() {
    //check email adress is a valid one
    this.submitted = true;

    if(!(this.emailAddress.includes('@'))) {
      this.noEmailReset = false;
      this.noEmail = true;
      this.loading = false;
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.emailAddress, this.password)
      .pipe(first())
      .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.invalidLogin = true;
            this.loading = false;
            this.password = '';
      });
  }

  ForgotClicked() {
    //check email adress is a valid one
    if(!(this.emailAddress.includes('@'))) {
      this.noEmailReset = false;
      this.noEmail = true;
      this.loading = false;
      return;
    }

  }
  RequestClicked() {
  }
 }
