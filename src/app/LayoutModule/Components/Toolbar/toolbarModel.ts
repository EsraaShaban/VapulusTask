import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ToolbarModel {

  //============ Data ============================
  public searchText: FormControl = new FormControl();

  constructor() {}

}
