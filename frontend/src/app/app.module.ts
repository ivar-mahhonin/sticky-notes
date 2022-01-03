import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NoteEditorComponent } from './note-editor/note-editor.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbModalModule, NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NoteEditorToolboxComponent } from './note-editor/note-editor-toolbox/note-editor-toolbox.component';
import { SimpleModalComponent } from './lib/simple-modal/simple-modal.component';
import {HttpErrorInterceptor} from "./services/http-error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteEditorComponent,
    NoteEditorToolboxComponent,
    SimpleModalComponent
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
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [ SimpleModalComponent ]
})
export class AppModule { }
