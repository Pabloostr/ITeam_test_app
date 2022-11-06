import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CatsState, reducer } from './cat.reducer';

export interface State {
  cats: CatsState;
}

export const reducers: ActionReducerMap<State> = {
  cats: reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
