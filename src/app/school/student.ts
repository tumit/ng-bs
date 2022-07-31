import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface Student {
  name: string;
  classmates: string[];
}

export interface StudentForm {
  name: FormControl<string>;
  classmates: FormArray<FormControl<string>>;
}
