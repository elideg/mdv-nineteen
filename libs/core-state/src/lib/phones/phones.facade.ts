import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromPhones from './phones.reducer';
import * as phonesActions from './phones.actions';
import * as phonesSelectors from './phones.selectors';
import { Phone } from '@mdv-nineteen/core-data';

@Injectable({
  providedIn: 'root'
})
export class PhonesFacade {
  allPhones$ = this.store.pipe(select(phonesSelectors.selectAllPhones));
  selectedPhone$ = this.store.pipe(select(phonesSelectors.selectPhone));
  phoneLoading$ = this.store.pipe(select(phonesSelectors.selectPhonesLoading));

  constructor(private store: Store<fromPhones.PhonesPartialState>) {}

  selectPhone(selectedPhoneId: string) {
    this.dispatch(phonesActions.phoneSelected({ selectedPhoneId }));
  }

  loadPhones() {
    this.dispatch(phonesActions.loadPhones());
  }

  createPhone(phone: Phone) {
    this.dispatch(phonesActions.createPhone({ phone }));
  }

  updatePhone(phone: Phone) {
    this.dispatch(phonesActions.updatePhone({ phone }));
  }

  deletePhone(phone: Phone) {
    this.dispatch(phonesActions.deletePhone({ phone }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
