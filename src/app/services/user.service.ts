import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiRoot } from './common';
import { IUser } from '../store/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  findByEmail(email: string) {
    return this.httpClient.get(`${apiRoot}/users/email/:${email}`);
  }

  findByLogin(login: string) {
    return this.httpClient.get(`${apiRoot}/users/login/:${login}`);
  }

  getAllUsers() {
    return this.httpClient.get(`${apiRoot}/users`);
  }

  createUser(user) {
    return this.httpClient.post(`${apiRoot}/users`, JSON.stringify(user), httpOptions);
  }

}
