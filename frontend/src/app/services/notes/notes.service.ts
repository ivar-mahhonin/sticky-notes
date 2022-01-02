import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiRouter} from "../ApiRouter";
import {Note} from "../../models/note.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<Note[]> {
    return this.http.get<Note[]>(ApiRouter.url('/notes')());
  }

  create(text: string): Observable<Note> {
    return this.http.post<Note>(ApiRouter.url('/notes')(), {text});
  }

  update(note: Note): Observable<Note> {
    return this.http.put<Note>(ApiRouter.url('/notes/:id')({id: note.id}), note);
  }

  delete(id: string): Observable<Note> {
    return this.http.delete<Note>(ApiRouter.url('/notes/:id')({id}));
  }
}
