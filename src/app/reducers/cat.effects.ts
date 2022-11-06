import { CatBreedService } from '../services/cat-breed.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  getBreeds,
  getBreedsFailure,
  getBreedsSuccess,
  getCats,
  getCatsFailure,
  getCatsSuccess,
} from './cat.actions';
import { catchError, map, of, switchMap, take } from 'rxjs';

@Injectable()
export class CatsEffects {
  constructor(private actions$: Actions, private service: CatBreedService) {}

  getBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBreeds),
      switchMap((_) =>
        this.service.getBreeds().pipe(
          take(1),
          map((action) =>
            getBreedsSuccess({
              breeds: action.map((obj) => ({ name: obj.name, id: obj.id })),
            })
          ),
          catchError((error: any) => of(getBreedsFailure(error)))
        )
      )
    )
  );

  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCats),
      switchMap((action) =>
        this.service.getCats(action.limit, action.id).pipe(
          take(1),
          map((action) =>
            getCatsSuccess({
              cats: action,
            })
          ),
          catchError((error: any) => of(getCatsFailure(error)))
        )
      )
    )
  );
}
