import { ValidationErrors, AbstractControl } from "@angular/forms";

export function passwordValidator (control:AbstractControl): ValidationErrors | null {
    if(!control.value){return null}

    const password = control.parent?.get(`password`)?.value;
    const rePass = control.value;
    return password == rePass ? null : {invalidPasswords : true}
}