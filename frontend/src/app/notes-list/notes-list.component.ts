import {Component, OnInit} from '@angular/core';
import {Note} from "../models/note.model";
import {NotesService} from "../services/notes/notes.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Subject} from "rxjs";
import {SimpleModalComponent} from "../lib/simple-modal/simple-modal.component";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  clearEditorStream$ = new Subject<void>();

  constructor(private notesService: NotesService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.notesService.all().subscribe((notes: Note[]) => this.notes = this.sortNotesByModifiedDate(notes));
  }

  save(text: string): void {
    this.notesService.create(text).subscribe(note => {
      this.notes.unshift(note);
      this.clearEditorStream$.next();
    });
  }

  edit(id: number, index: number): void {
    this.notesService.getById(id).subscribe(
      note => this.notes[index].text = note.text,
      _ => this.clearEditorStream$.next());
  }

  delete(id: number): void {
    const modalRef = this.modalService.open(SimpleModalComponent);

    modalRef.componentInstance.title = 'Deleting note';
    modalRef.componentInstance.text = 'Are you sure you would like to delete this note?';
    modalRef.componentInstance.confirmText = 'Delete';
    modalRef.componentInstance.cancelText = 'Cancel';

    modalRef.result.then((confirmDelete: boolean) => {
      if (confirmDelete) {
        this.notesService.delete(id).subscribe(_ => this.notes = this.notes.filter(n => n.id !== id));
      }
    });
  }

  update(note: Note, index: number): void {
    this.notesService.update(note).subscribe(updatedNote => this.notes[index] = updatedNote);
  }

  sortNotesByModifiedDate(notes: Note[]): Note[] {
    return notes.sort((a, b) => {
      return <any>new Date(b.modified) - <any>new Date(a.modified);
    });
  }
}
