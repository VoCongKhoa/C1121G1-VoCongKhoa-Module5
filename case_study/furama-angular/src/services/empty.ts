import {AbstractControl, ValidationErrors} from "@angular/forms";

export function empty(control: AbstractControl): ValidationErrors | null {
  const str = control.value;
  if (str == ''){
    return {empty: true, requiredValue: 'Empty! Please input!'}
  }
  return null;
}
