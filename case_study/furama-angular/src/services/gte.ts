import {AbstractControl, ValidationErrors} from "@angular/forms";

export function gte(control: AbstractControl): ValidationErrors | null {

  const v = control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 'Must be a number' }
  }

  if (v < 0) {
    return { gte: true, requiredValue: 'Must be greate than 0' }
  }

  return null

}
