import { TestBed } from '@angular/core/testing';

import { GithubPerfilService } from './github-perfil.service';

describe('GithubPerfilService', () => {
  let service: GithubPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
