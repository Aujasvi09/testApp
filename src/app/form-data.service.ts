import { Injectable } from '@angular/core';
import { FormInfo } from './models/FormInfo';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formData: FormInfo[] = []

  getData(){
    return this.formData
  }

  setData(data: FormInfo){
    this.formData.push(data)
  }

  deleteData(data: Object){
    const filteredFormData = this.formData.filter(value => value !== data )
    console.log(filteredFormData)
    this.formData = filteredFormData
  }

}
