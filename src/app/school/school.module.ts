import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentFormComponent, SchoolComponent],
  imports: [CommonModule, ReactiveFormsModule, SchoolRoutingModule],
})
export class SchoolModule {}
