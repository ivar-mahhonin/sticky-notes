import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NotesListComponent} from './notes-list.component';
import {NoteEditorComponent} from "../note-editor/note-editor.component";
import {NoteEditorToolboxComponent} from "../note-editor/note-editor-toolbox/note-editor-toolbox.component";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesListComponent, NoteEditorComponent,NoteEditorToolboxComponent],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
