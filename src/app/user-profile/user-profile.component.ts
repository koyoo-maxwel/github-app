import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  repos: any;
  //username: string = 'lazhari';

  constructor(private _githubService: GithubService) {
    this.user = null;
  }

  ngOnInit() {
    //this.searchUser();
  }
  searchUser(username: string) {
    console.log('username', username);
    this._githubService.updateUser(username);
    // Get User Profile 
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    // Get user Repos 
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos.sort((a, b) => (b.stargazers_count - a.stargazers_count));
    });
  }

}
