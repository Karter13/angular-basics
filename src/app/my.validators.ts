import {FormControl} from '@angular/forms';

export class MyValidators {

  static restrictedEmails(control: FormControl): { [key: string]: boolean } | null {
    if (['M@1.ru', 'A@2.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
}
