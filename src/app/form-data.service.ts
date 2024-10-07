import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formData: any[] = []

  getData(){
    return this.formData
  }

  setData(data: Object){
    this.formData.push(data)
  }

  deleteData(data: Object){
    const filteredFormData = this.formData.filter(value => value !== data )
    console.log(filteredFormData)
    this.formData = filteredFormData
  }

}
