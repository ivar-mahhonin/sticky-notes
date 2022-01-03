import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';
import {HttpClientModule} from "@angular/common/http";

describe('NotesServiceService', () => {
  let service: NotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
