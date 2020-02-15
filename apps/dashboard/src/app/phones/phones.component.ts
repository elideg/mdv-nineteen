import { PhonesFacade } from './../../../../../libs/core-state/src/lib/phones/phones.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Phone } from '@mdv-nineteen/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-nineteen-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  form: FormGroup;
  selectedPhone$: Observable<Phone> = this.phonesFacade.selectedPhone$;
  phones$: Observable<Phone[]> = this.phonesFacade.allPhones$;

  constructor(
      private fb: FormBuilder,
      private phonesFacade: PhonesFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.phonesFacade.loadPhones();
      this.selectPhone({ id: null } as Phone);
  }

  selectPhone(phone: Phone) {
      this.form.patchValue(phone);
      this.phonesFacade.selectPhone(phone.id);
  }

  cancel() {
      this.selectPhone({ id: null } as Phone);
      this.form.reset();
  }

  savePhone(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.phonesFacade.updatePhone(this.form.value);
          this.selectPhone({ id: null } as Phone);
      } else {
          this.phonesFacade.createPhone(this.form.value);
          this.selectPhone({ id: null } as Phone);
      }
  }

  deletePhone(phone: Phone) {
      this.phonesFacade.deletePhone(phone);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          title: ['', Validators.compose([Validators.required])],
          details: ['', Validators.compose([Validators.required])],
      })
  }

}
