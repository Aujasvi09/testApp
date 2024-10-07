import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { FormInfo } from '../models/FormInfo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  submittedData: any
  constructor(private formDataService: FormDataService){}

  ngOnInit(): void {
    this.submittedData = this.formDataService.getData()
  }

  deleteEntry(data: FormInfo){
    this.formDataService.deleteData(data)
    this.submittedData = this.formDataService.getData()
  }

  editEntry(data: FormInfo){
    console.log(data)
    const selectedData = this.submittedData.find((entry: FormInfo) => entry === data)

  }

}
