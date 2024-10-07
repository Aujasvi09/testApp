import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

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

  deleteEntry(data: any){
    this.formDataService.deleteData(data)
    this.submittedData = this.formDataService.getData()
    console.log("CALLED")
  }

}
