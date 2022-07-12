import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GithubPerfilService } from 'src/app/services/github-perfil.service';
import { UserPerfil } from 'src/shared/models/UserPerfil';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit, OnChanges {
  @Input() public userName: string = '';
  userPerfil!: UserPerfil;
  @Output() public noResult: EventEmitter<boolean> = new EventEmitter(false);
  constructor(private githubPerfilService: GithubPerfilService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getUserPerfil();
    }
  }

  getUserPerfil() {
    if (this.userName != undefined) {
      this.githubPerfilService.getPerfilUser(this.userName).subscribe(
        (next) => {
          this.userPerfil = next;
          this.noResult.emit(false);
        },
        (error) => {
          this.noResult.emit(true);
        }
      );
    }
  }
}
