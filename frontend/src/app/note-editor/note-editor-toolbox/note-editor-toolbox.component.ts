import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSave, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-editor-toolbox',
  templateUrl: './note-editor-toolbox.component.html',
  styleUrls: ['./note-editor-toolbox.component.scss']
})
export class NoteEditorToolboxComponent {
  @Input() canRemove: boolean;
  @Input() canEdit: boolean;
  @Input() canSave: boolean;

  @Output() removeClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() saveClicked: EventEmitter<void> = new EventEmitter();

  faSave = faSave;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
}
