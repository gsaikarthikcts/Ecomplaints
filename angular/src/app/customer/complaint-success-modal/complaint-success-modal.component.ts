import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-complaint-success-modal',
  templateUrl: './complaint-success-modal.component.html',
  styleUrls: ['./complaint-success-modal.component.css']
})
export class ComplaintSuccessModalComponent {
  @Input() showModal: boolean = false;
  @Input() complaintid: string | undefined;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
