import {AbstractControl, ValidationErrors} from "@angular/forms";

export function gte(control: AbstractControl): ValidationErrors | null {

  const v = control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 'Must be a number!!' }
  }

  if (v <= 18 ) {
    return { gte: true, requiredValue: 'Must be greate than 18!!' }
  }

  return null

}
