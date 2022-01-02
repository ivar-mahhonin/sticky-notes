import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrls: ['./delete-note-modal.component.scss']
})
export class DeleteNoteModalComponent implements OnInit {

  constructor(private activeModalService: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  close(value: boolean) {
    this.activeModalService.close(value);
  }

  dismiss(result: string) {
    this.activeModalService.dismiss(result);
  }
}
