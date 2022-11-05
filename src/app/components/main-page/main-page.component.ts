import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, take, tap } from 'rxjs';
import { CatBreedService } from 'src/app/services/cat-breed.service';

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

  constructor(private http: CatBreedService) {}

  ngOnInit(): void {
    this.getBreeds();
  }
  getBreeds(): void {
    this.http
    .getBreeds()
    .pipe(
      take(1),
      map((array) => array.map((obj) => ({ name: obj.name, id: obj.id })))
    )
    .subscribe((result) => (this.breeds = result));
  }
  showKitties(): void {
    this.http
      .getCats(this.catsForm.value.perPage, this.catsForm.value.breed)
      .pipe(take(1))
      .subscribe((result) => this.catsList = result);
  }
}
