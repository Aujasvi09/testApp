import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']  // Fixed typo here
})
export class SampleFormComponent implements OnInit {

  @Input() countryStatesMapping: any;
  @Input() services: string[] = [];
  @Input() regions: string[] = [];
  @Input() regionCountryMapping: any;

  form: FormGroup;

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {
    this.form = this.fb.group({
      service: ['',Validators.required],
      region: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.countryStatesMapping);
  }

  handleSelect(type: string, event: Event) {
    const selectEle = event.target as HTMLSelectElement;
    switch (type) {
      case "region":
        this.form.patchValue({ country: '' });  
        this.form.patchValue({state: ''})
        break;
      case "country":
        this.form.patchValue({ state: '' });  
        break;
      default:
        break;
    }
  }

  handleSubmit() {
    this.formDataService.setData(this.form.value)
  }
}
