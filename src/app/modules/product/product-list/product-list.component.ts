import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  filterForm!: FormGroup;
  categories = ['C', 'Category2'];
  brands = ['Brand1', 'Brand2'];

  page = 1;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      category: this.formBuilder.array(this.createCheckboxes(this.categories)),
    });

    this.onFormChanges();
  }

  get category(): FormArray {
    return this.filterForm.get('category') as FormArray;
  }

  createCheckboxes(options: string[]): any {
    options.forEach(() => {
      this.category.push(this.formBuilder.control(false));
    });
    // return options.map(() => this.formBuilder.control(false));
  }

  onFormChanges() {
    // Subscribe to form value changes to send the selected filters as query params
    this.filterForm.valueChanges.subscribe((formValue) => {
      // Call a method to send the formValue to the server as query params

      this.sendFiltersToServer(formValue);
    });
  }

  sendFiltersToServer(formValue: any) {
    // Code to send formValue to the server as query params
    // Replace this with your HTTP request to the server
    console.log(formValue);
  }

  pageEvent(pageNumber: any): void {
    this.page = pageNumber;
  }
}
