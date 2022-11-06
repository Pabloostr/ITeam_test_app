import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getBreeds, getCats } from 'src/app/reducers/cat.actions';
import { breeds, cats } from 'src/app/reducers/cat.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  breeds: Array<any> = [];
  catsList: Array<any> = [];
  perPageList = [1, 3, 5, 10];
  breedControl = new FormControl();
  perPageControl = new FormControl(10);

  catsForm = new FormGroup({
    breed: this.breedControl,
    perPage: this.perPageControl,
  });

  breeds$ = this.store.select(breeds);
  cats$ = this.store.select(cats);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getBreeds());
  }
  showKitties(): void {
    this.store.dispatch(
      getCats({
        limit: this.catsForm.value.perPage,
        id: this.catsForm.value.breed,
      })
    );
  }
}
