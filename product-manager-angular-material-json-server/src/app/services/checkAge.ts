import {AbstractControl} from "@angular/forms";

export function checkAge(dayOfBirth: AbstractControl) {
  const birth = new Date(dayOfBirth.value);
  const birthDay = Date.now() - birth.getTime() - 86400000;
  const time = new Date(birthDay);
  const age = time.getUTCFullYear() - 1970;
  if (age < 18) {
    return {ageError: true};
  }
  return null;
}
