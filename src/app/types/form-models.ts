import { AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, Validator, ValidatorFn } from '@angular/forms';

export type ValidatorModel<T, K> = T | K | (T | K)[];

export type FormGroupModel<T> = {
  [x in keyof T]: [T[x], ValidatorModel<Validator, ValidatorFn>?, ValidatorModel<AsyncValidator, AsyncValidatorFn>?];
};

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any> ? FormGroup<ControlsOf<T[K]>> : FormControl<T[K]>;
};
