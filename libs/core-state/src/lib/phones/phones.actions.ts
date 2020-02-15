import { createAction, props } from '@ngrx/store';

import { Phone } from '@mdv-nineteen/core-data';

export const phoneSelected = createAction(
  '[PHONE] Phone Selected',
  props<{ selectedPhoneId: string }>()
);

// Load Actions
export const loadPhones = createAction('[PHONE] Load Phones');

export const phonesLoaded = createAction(
  '[PHONE] Phones Loaded',
  props<{ phones: Phone[] }>()
);

// Create Actions
export const createPhone = createAction(
  '[PHONE] Create Phone',
  props<{ phone: Phone }>()
);

export const phoneCreated = createAction(
  '[PHONE] Phone Created',
  props<{ phone: Phone }>()
);

// Update Actions
export const updatePhone = createAction(
  '[PHONE] Update Phone',
  props<{ phone: Phone }>()
);

export const phoneUpdated = createAction(
  '[PHONE] Phone Updated',
  props<{ phone: Phone }>()
);

// Delete Actions
export const deletePhone = createAction(
  '[PHONE] Delete Phone',
  props<{ phone: Phone }>()
);

export const phoneDeleted = createAction(
  '[PHONE] Phone Deleted',
  props<{ phone: Phone }>()
);
