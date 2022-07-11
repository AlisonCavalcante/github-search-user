import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GithubPerfilService } from 'src/app/services/github-perfil.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnChanges {

  @Input() public userName: string = '';

  constructor(private githubPerfilService: GithubPerfilService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes){
        this.getUserPerfil();
      }
  }

  getUserPerfil() {
    this.githubPerfilService.getPerfilUser(this.userName).subscribe(res => console.log(res))
  }


}
