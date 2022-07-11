import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GithubPerfilService } from 'src/app/services/github-perfil.service';
import { UserPerfil } from 'src/shared/models/UserPerfil';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnChanges {

  @Input() public userName: string = '';
  userPerfil!: UserPerfil;
  constructor(private githubPerfilService: GithubPerfilService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes){
        this.getUserPerfil();
      }
  }

  getUserPerfil() {
    this.githubPerfilService.getPerfilUser(this.userName).subscribe(res => {
      this.userPerfil = res;
      console.log(this.userPerfil)
    })
  }


}
