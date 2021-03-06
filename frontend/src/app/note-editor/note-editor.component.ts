import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Note} from "../models/note.model";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  @Input() clearEditor: Subject<void>;
  @Input() note: Note = new Note();

  @Output() editEmitter: EventEmitter<number> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter();
  @Output() saveEmitter: EventEmitter<string> = new EventEmitter();
  @Output() updateEmitter: EventEmitter<Note> = new EventEmitter();

  readonly = true;

  clearEditorSubscription: Subscription;

  ngOnInit(): void {
    this.readonly = this.note?.id !== undefined;

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

  edit(): void{
    this.readonly = false;
    this.editEmitter.emit(this.note.id);
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
