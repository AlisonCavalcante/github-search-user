import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName!: string;
  darkMode: boolean = false;
  noResult: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme');
  }

  searchUser(userName: string) {
   this.userName = userName;
  }

  resultSearch(result: boolean) {
   this.noResult = result;
  }


}
