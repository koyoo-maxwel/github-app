import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;
  private client_id = '7a2cc1dbb590d7d96d79';
  private client_secret = 'b9a5b382974b29e9e147cbbdefbdde1a18579360';

  constructor(private _http: Http) {
    this.username = 'koyoo-maxwel';
  }

  getUser() {
    return this._http.get(`http://api.github.com/users/${this.username}?&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get(`http://api.github.com/users/${this.username}/repos?&client_secret=${this.client_secret}&sort=created`)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
