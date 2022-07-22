import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Student, StudentForm } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  // studentForm = this.fb.nonNullable.group<Student>({
  //   name: 'Harry',
  //   classmates: ['A', 'B'],
  // });

  // studentForm = new FormGroup<StudentForm>( {
  //   name: new FormControl<string>,
  //   classmates: new FormArray()
  // });

  studentForm = new FormGroup<StudentForm>({
    name: new FormControl('Cherprang', {
      nonNullable: true,
    }),
    classmates: new FormArray([
      new FormControl('Music', {
        nonNullable: true,
      }),
      new FormControl('Jennis', {
        nonNullable: true,
      }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm.controls.name;
    this.studentForm.controls.classmates;
    this.studentForm.value.classmates;
    this.studentForm.getRawValue().classmates;
  }
}
