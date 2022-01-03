import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteEditorComponent} from './note-editor.component';
import {FormsModule} from "@angular/forms";
import {NoteEditorToolboxComponent} from "./note-editor-toolbox/note-editor-toolbox.component";

describe('NoteEditorComponent', () => {
  let component: NoteEditorComponent;
  let fixture: ComponentFixture<NoteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditorComponent, NoteEditorToolboxComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
