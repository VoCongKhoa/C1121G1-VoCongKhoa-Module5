import {AbstractControl, ValidationErrors} from "@angular/forms";

export function gteGia(control: AbstractControl): ValidationErrors | null {

  const v = control.value;

  if (isNaN(v)) {
    return { gte: true, requiredValue: 'Phai la so' }
  }

  if (v <= 100000000) {
    return { gte: true, requiredValue: 'Phai lon hon 100.000.000 VND' }
  }
  return null

}
