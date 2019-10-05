import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[canNotBe]',
  providers: [ { provide: NG_VALIDATORS, useExisting: CanNotBeDirective, multi: true }]
})
export class CanNotBeDirective implements Validator {
  @Input() canNotBe: string;
  validate(control: AbstractControl): ValidationErrors {
    if (control.value === this.canNotBe) {
      return { canNotBe: `value can not be ${this.canNotBe}`};
    }
    return null;
  }

  constructor() { }

}
