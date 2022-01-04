import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteEditorComponent} from './note-editor.component';
import {FormsModule} from "@angular/forms";
import {NoteEditorToolboxComponent} from "./note-editor-toolbox/note-editor-toolbox.component";
import {Subject} from "rxjs";
import {Note} from "../models/note.model";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

describe('NoteEditorComponent', () => {
  let component: NoteEditorComponent;
  let fixture: ComponentFixture<NoteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditorComponent, NoteEditorToolboxComponent],
      imports: [FormsModule, FontAwesomeModule]
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

  it('should create default note if not provided', () => {
    expect(component.note.id).toBeUndefined();
  });

  it('should be in edit mode by default, if note is not provided', () => {
    expect(component.readonly).toBeFalse();
  });

  it('should be in readonly mode, if note is provided', () => {
    component.note = new Note( 'Text');
    component.note.id = 1;

    component.ngOnInit();
    expect(component.readonly).toBeTruthy();
  });

  it('should subscribe to clear editor events, if stream provided', () => {
    component.clearEditor = new Subject<void>();
    component.ngOnInit();
    expect(component.clearEditorSubscription).toBeTruthy();
  });

  it('should clear editor state for existing note', () => {
    component.note = new Note( 'Text');
    component.note.id = 1;

    component.ngOnInit();
    component.clearEditorState();
    expect(component.readonly).toBeTruthy();
  });

  it('should clear editor and create new note', () => {
    const note = new Note( 'Text');
    component.note = note;

    component.ngOnInit();
    component.clearEditorState();
    expect(component.readonly).toBeFalse();
    expect(component.note.text).not.toEqual(note.text);
  });

  it('should call save emitter', () => {
    const note = new Note( 'Text');

    component.note = note;

    spyOn(component.saveEmitter, 'emit');
    component.save();
    expect(component.saveEmitter.emit).toHaveBeenCalledWith(note.text);
  });

  it('should call update emitter', () => {
    const note = new Note( 'Text');
    note.id = 1;
    component.note = note;

    spyOn(component.updateEmitter, 'emit');
    component.save();
    expect(component.updateEmitter.emit).toHaveBeenCalledWith(note);
  });

  it('should call delete emitter', () => {
    const note = new Note( 'Text');
    note.id = 1;
    component.note = note;

    spyOn(component.deleteEmitter, 'emit');
    component.remove();
    expect(component.deleteEmitter.emit).toHaveBeenCalledWith(note.id);
  });

  it('should display correct existing note text', () => {
    const note = new Note( 'Text');
    note.id = 1;

    component.note = note;

    component.ngOnInit();

    //component.readonly = true;

    fixture.detectChanges();

    expect(component.readonly).toBeTruthy();

    const postIt = fixture.nativeElement.querySelector('.post-it');
    expect(postIt.textContent).toBe('Text');
  });
});
