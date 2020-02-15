import { PhonesFacade } from './phones.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as phonesActions from './phones.actions';
import { Phone, PhonesService, NotifyService } from '@mdv-nineteen/core-data';
import { PhonesPartialState } from './phones.reducer';

@Injectable()
export class PhonesEffects {
  loadPhones$ = createEffect(() =>
    this.dataPersistence.fetch(phonesActions.loadPhones, {
      run: (
        action: ReturnType<typeof phonesActions.loadPhones>,
        state: PhonesPartialState
      ) => {
        return this.phonesService.all().pipe(
          map((phones: Phone[]) => phonesActions.phonesLoaded({ phones }))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.loadPhones>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addPhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.createPhone, {
      run: (
        action: ReturnType<typeof phonesActions.createPhone>,
        state: PhonesPartialState
      ) => {
        return this.phonesService.create(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneCreated({ phone })),
          tap(() => this.notify.notify('Successfully Added a Phone'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.createPhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updatePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.updatePhone, {
      run: (
        action: ReturnType<typeof phonesActions.updatePhone>,
        state: PhonesPartialState
      ) => {
        return this.phonesService.update(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneUpdated({ phone })),
          tap(() => this.notify.notify('Successfully Updated a Phone'))
        );
      },
      onError: (action: ReturnType<typeof phonesActions.updatePhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deletePhone$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(phonesActions.deletePhone, {
      run: (
        action: ReturnType<typeof phonesActions.deletePhone>,
        state: PhonesPartialState
      ) => {
        return this.phonesService.delete(action.phone).pipe(
          map((phone: Phone) => phonesActions.phoneDeleted({ phone })),
          tap(() => this.notify.notify('Successfully Deleted a Phone')),
          tap(() => this.phonesFacade.loadPhones())
        );
      },
      onError: (action: ReturnType<typeof phonesActions.deletePhone>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PhonesPartialState>,
    private phonesService: PhonesService,
    private notify: NotifyService,
    private phonesFacade: PhonesFacade
  ) {}
}
