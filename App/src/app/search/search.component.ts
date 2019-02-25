import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup = this.buildForm();

  constructor(public formBuilder: FormBuilder) { }

  buildForm() {
    return this.formBuilder.group({
      'search': ['']
    });
  }

  ngOnInit() {
    this.registerFormControls();
  }

  registerFormControls() {
    this.searchForm.get('search').valueChanges.
      subscribe((searchKey: string) => this.validateAndSearch(searchKey));
  }

  validateAndSearch(searchKey: string) {
    console.log('search', searchKey);
  }
}
