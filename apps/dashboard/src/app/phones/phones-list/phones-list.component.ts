import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Phone } from '@mdv-nineteen/core-data';

@Component({
  selector: 'mdv-nineteen-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.scss']
})
export class PhonesListComponent implements OnInit {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(nineteen: Phone) {
    this.selected.emit(nineteen);
  }

  delete(nineteen: Phone) {
    this.deleted.emit(nineteen);
  }
}
