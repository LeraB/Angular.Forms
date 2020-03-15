import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent {

  public form: FormGroup;
  private result: FormData;
  private isSubmit: boolean;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      areaCode: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormArray([new FormControl(null, [Validators.email, Validators.required])]),
      company: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      streetAddressLineTwo: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      stateProvince: new FormControl('', Validators.required),
      postalZipCode: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.form.get('email') as FormArray;
  }

  addEmailField() {
    this.email.push(new FormControl(null, Validators.email));
  }

  deleteEmailField(item) {
    this.email.removeAt(this.email.controls.indexOf(item));
  }

  onSubmit(formData: FormData) {
    this.result = formData;
    this.isSubmit = true;
  }
}
