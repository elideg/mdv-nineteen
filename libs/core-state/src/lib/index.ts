import { ActionReducerMap } from '@ngrx/store';

import * as fromPhones from './phones/phones.reducer';

export interface AppState {
  phones: fromPhones.PhonesState;
}

export const reducers: ActionReducerMap<AppState> = {
  phones: fromPhones.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
