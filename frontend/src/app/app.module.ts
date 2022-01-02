import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NoteEditorComponent } from './note-editor/note-editor.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbModalModule, NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NoteEditorToolboxComponent } from './note-editor/note-editor-toolbox/note-editor-toolbox.component';
import { DeleteNoteModalComponent } from './notes-list/delete-note-modal/delete-note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteEditorComponent,
    NoteEditorToolboxComponent,
    DeleteNoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgbModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DeleteNoteModalComponent ]
})
export class AppModule { }
