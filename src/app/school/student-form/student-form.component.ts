import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ControlsOf } from 'src/app/types/form-models';
import { Student, StudentForm } from '../student';

interface Technology {
  id: number;
  name: string;
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  // studentForm = new FormGroup<StudentForm>({
  //   name: new FormControl('Cherprang', {
  //     nonNullable: true,
  //   }),
  //   classmates: new FormArray([
  //     new FormControl('Music', {
  //       nonNullable: true,
  //     }),
  //     new FormControl('Jennis', {
  //       nonNullable: true,
  //     }),
  //   ]),
  // });

  // studentForm = this.fb.group({
  //   name: new FormControl('Cherprang', { nonNullable: true, validators: [Validators.required] }),
  //   classmates: this.fb.array([
  //     new FormControl('Music', {
  //       nonNullable: true,
  //     }),
  //     new FormControl('Jennis', {
  //       nonNullable: true,
  //     }),
  //   ]),
  // });

  studentForm = this.fb.group({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    classmates: this.fb.array([], {
      validators: [Validators.required, Validators.maxLength(5)],
    }),
  });

  studentForm2 = this.fb.group<Student>({
    name: '',
    classmates: [],
  });

  // studentForm2 = new FormGroup<ControlsOf<Student>>({
  //   name: new FormControl(),
  //   classmates: new FormArray([]),
  // });

  newClassmate = new FormControl('', { nonNullable: true });

  technologies: Technology[] = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Docker' },
  ];
  technology = new FormControl<Technology | null>(this.technologies[0]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm.controls.name;
    this.studentForm.controls.classmates;
    this.studentForm.value.classmates;
    this.studentForm.getRawValue().classmates;

    setTimeout(() => {
      this.technologies = [
        { id: 1, name: 'Java' },
        { id: 2, name: 'Angular' },
        { id: 3, name: 'Docker' },
        { id: 4, name: 'Jenkins' },
      ];
    }, 2000);
  }

  addClassmate() {
    this.studentForm.controls.classmates.push(new FormControl(this.newClassmate.value, { nonNullable: true }));
  }

  compareTechnology(opt1: Technology, opt2: Technology): boolean {
    return opt1?.id === opt2?.id;
  }
}
