import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditorToolboxComponent } from './note-editor-toolbox.component';

describe('NoteEditorToolboxComponent', () => {
  let component: NoteEditorToolboxComponent;
  let fixture: ComponentFixture<NoteEditorToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditorToolboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditorToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
