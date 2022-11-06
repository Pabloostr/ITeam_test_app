import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { getBreedsSuccess, getCatsSuccess } from './cat.actions';

export const catsFeatureKey = 'cats';

export interface CatsState extends EntityState<any> {
  breeds: Array<any>;
  cats: Array<any>;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: CatsState = adapter.getInitialState({
  breeds: null,
  cats: null,
});

export const reducer = createReducer(
  initialState,
  on(getBreedsSuccess, (state, action) => ({
    ...state,
    breeds: action.breeds,
  })),
  on(getCatsSuccess, (state, action) => ({ ...state, cats: action.cats }))
);
