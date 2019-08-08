import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Categories } from '../model/categories';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { CategoryService } from '../category/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(private catServ: CategoryService,private router:Router) {
  }
  myControl = new FormControl();
  options: any;
  filteredOptions: Observable<string[]>;
  category: Categories;
  selectedCategory;
  id: number;
 
  ngOnInit() {
    this.catServ.getAllCategories().subscribe((res: any) => {
      this.options = res;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    })  
 
  }
  private _filter(value: string): string[] {
    const filterValue = value;

    return this.options.filter(option => option.categoryName.includes(filterValue));
  }

  displayFn(category?: any): string | undefined {
    return category ? category.categoryName : undefined;
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    var selectedCategory = event.option.value;
    this.router.navigate(['view',selectedCategory.categoryId]);
  }
}
 