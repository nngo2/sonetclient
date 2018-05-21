import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { apiRoot } from './common';
import { IUser } from '../store/user';

@Injectable()
export class UserService {

  constructor(private httpClient: AuthHttp) { }

  findByEmail(email: string) {
    return this.httpClient.get(`${apiRoot}/api/users/email/:${email}`);
  }

  findByLogin(login: string) {
    return this.httpClient.get(`${apiRoot}/api/users/login/:${login}`);
  }

  createUser(user) {
    return this.httpClient.post(`${apiRoot}/api/users`, JSON.stringify(user));
  }

}
