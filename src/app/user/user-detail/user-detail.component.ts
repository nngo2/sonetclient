import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;

  get id() { return this.userForm.get('id'); }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get email() { return this.userForm.get('email'); }
  get login() { return this.userForm.get('login'); }
  get password() { return this.userForm.get('password'); }

  constructor(private _userService: UserService, private fb: FormBuilder) {
    this.userForm = fb.group({
      'id': [0],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email], [this.uniqueEmail.bind(this)]],
      'login': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)], [this.uniqueLogin.bind(this)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.dir(this.userForm.value);
      this._userService.createUser(this.userForm.value).subscribe(
        data => console.dir(data),
        err => Observable.throw(err)
      );
    }
  }

  uniqueEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      this._userService.findByEmail(control.value).subscribe(
        data => {
          if (data) {
            resolve({ uniqueEmail: true });
          } else {
            resolve(null);
          }
        },
        err => {
          Observable.throw(err);
        }
      );
    });
  }

  uniqueLogin(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>(resolve => {
        this._userService.findByLogin(control.value).subscribe(
          data => {
            if (data) {
              resolve({ uniqueLogin: true });
            } else {
              resolve(null);
            }
          },
          err => {
            Observable.throw(err);
          }
        );
    });
  }

}
