import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() text: string;

  @Input() confirmText: string;
  @Input() cancelText: string;

  constructor(private activeModalService: NgbActiveModal) {
  }

  close(value: boolean) {
    this.activeModalService.close(value);
  }

  dismiss(result: string) {
    this.activeModalService.dismiss(result);
  }
}
