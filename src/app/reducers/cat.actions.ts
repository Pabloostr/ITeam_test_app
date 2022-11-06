import { createAction, props } from '@ngrx/store';

export const getBreeds = createAction('[Breeds/API] get breeds');

export const getBreedsSuccess = createAction(
  '[Breeds/API] get breeds success',
  props<{ breeds: Array<any> }>()
);

export const getBreedsFailure = createAction(
  '[Breeds/API] get breeds failure',
  props<{ message: string }>()
);

export const getCats = createAction(
  '[Cats/API] get cats',
  props<{ limit: number; id: string }>()
);

export const getCatsSuccess = createAction(
  '[Cats/API] get cats success',
  props<{ cats: Array<any> }>()
);

export const getCatsFailure = createAction(
  '[Cats/API] get cats failure',
  props<{ any }>()
);
