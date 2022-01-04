import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NotesService} from "../services/notes/notes.service";
import {Note} from "../models/note.model";
import {map} from "rxjs/operators";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  @Input() clearEditor: Subject<void>;
  @Input() note: Note = new Note();

  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter();
  @Output() saveEmitter: EventEmitter<string> = new EventEmitter();
  @Output() updateEmitter: EventEmitter<Note> = new EventEmitter();

  readonly = true;

  clearEditorSubscription: Subscription;

  //TODO get latest version of Note in edit mode
  constructor() {
  }

  ngOnInit(): void {
    this.readonly = this.note.id !== undefined;

    if (this.clearEditor) {
      this.clearEditorSubscription = this.clearEditor.subscribe(_ => this.clearEditorState())
    }
  }

  ngOnDestroy() {
    if (this.clearEditorSubscription) {
      this.clearEditorSubscription.unsubscribe();
    }
  }

  save(): void {
    if (this.note.id) {
      this.updateEmitter.emit(this.note);
    } else {
      this.saveEmitter.emit(this.note.text);
    }
  }

  remove(): void {
    this.deleteEmitter.emit(this.note.id);
  }

  clearEditorState() {
    if (this.note.id) {
      this.readonly = true;
    } else {
      this.readonly = false;
      this.note = new Note();
    }
  }
}
