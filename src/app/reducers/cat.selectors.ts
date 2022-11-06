import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromStore from './cat.reducer';

const catSelector = createFeatureSelector<fromStore.CatsState>(fromStore.catsFeatureKey);

export const breeds = createSelector(catSelector, state => state.breeds);
export const cats = createSelector(catSelector, state => state.cats);