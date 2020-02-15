import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Phone } from '@mdv-nineteen/core-data';

@Component({
  selector: 'mdv-nineteen-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.scss']
})
export class PhonesDetailsComponent implements OnInit {
  originalTitle;
  currentPhone: Phone

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set phone(value) {
    if (value) this.originalTitle = value.title;
      this.currentPhone = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(phone: Phone) {
    this.saved.emit(phone);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
