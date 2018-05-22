import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService, StateService } from '../../services/index';
import { UserActions } from '../../store/index';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private stateService: StateService,
    private userActions: UserActions,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.message = '';
    this.userActions.resetUserAction();
    this.authService.logout();
    this.userActions.loginUserAction(false);
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = '/home';
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.message = '';
          this.loading = false;
          this.userActions.loginUserAction(true);
          this.userActions.setUserAction(data.user);
          this.socketService.initSocket(data.user._id);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if (error.statusText) {
            this.message = error.statusText;
          } else {
            this.message = error;
          }

          this.loading = false;
        }
      );
  }

}
