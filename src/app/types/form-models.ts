import {
  AsyncValidator,
  AsyncValidatorFn,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export type ValidatorModel<T, K> = T | K | (T | K)[];

export type FormGroupModel<T> = {
  [x in keyof T]: [
    T[x],
    ValidatorModel<Validator, ValidatorFn>?,
    ValidatorModel<AsyncValidator, AsyncValidatorFn>?
  ];
};
