import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { apiRoot } from './common';
import { IUser } from '../store/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private httpClient: AuthHttp, private noJwtClient: HttpClient) { }

  checkEmailUnique(email: string) {
    return this.noJwtClient.get(`${apiRoot}/register/email/${email}`);
  }

  checkLoginUnique(login: string) {
    return this.noJwtClient.get(`${apiRoot}/register/login/${login}`);
  }

  registerUser(user) {
    return this.noJwtClient.post(`${apiRoot}/register`, JSON.stringify(user), httpOptions);
  }

  findByEmail(email: string) {
    return this.httpClient.get(`${apiRoot}/api/users/email/${email}`);
  }

  findByLogin(login: string) {
    return this.httpClient.get(`${apiRoot}/api/users/login/${login}`);
  }

  createUser(user) {
    return this.httpClient.post(`${apiRoot}/api/users`, JSON.stringify(user));
  }

  updateUser(user) {
    return this.httpClient.put(`${apiRoot}/api/users`, JSON.stringify(user));
  }

  findOnlineUsers() {
    return this.httpClient.get(`${apiRoot}/api/users/online`);
  }

}
