import {AbstractControl, ValidationErrors} from "@angular/forms";

export function gte(control: AbstractControl): ValidationErrors | null {

  const v = control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 'Phai la so' }
  }

  if (v <= 20) {
    return { gte: true, requiredValue: 'Phai lon hon 20' }
  }
  return null

}
