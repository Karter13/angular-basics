import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Гродно', Validators.required)
      })

    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value};
      console.log('FormData:', formData);
    }
  }

  setCapital() {
    const cityMap  = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };

    // @ts-ignore
    const cityKey = this.form.get('address').get('country').value;
    // @ts-ignore
    const city = cityMap[cityKey];

    this.form.patchValue({address: {city}});

  }
}

