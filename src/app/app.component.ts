import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'testApp';
  // oneWayBinding = "hello"
  // twoWayDataBinding = "Two Way Data Binding"
  // strArr = ["test1","test2", "test3","test4"]
  services: string[] = ["Electric", "Natural Gas", "Water","WasteWater"]

  regions: string[] = ["Asia", "North America"]

  regionCountryMapping: Object = {
    "Asia": ["India", "Japan", "China"],
    "North America" : ["USA", "Canada"]
  }

  countryStatesMapping: Object = {
    "India": ["AP", "AR", "AS", "BR", "CG", 
    "GA", "GJ", "HR", "HP", "JH", 
    "KA", "KL", "MP", "MH", "MN", 
    "ML", "MZ", "NL", "OD", "PB", 
    "RJ", "SK", "TN", "TS", "TR", 
    "UP", "UK", "WB", "AN", "CH", 
    "DN", "LD", "DL", "PY", "JK", 
    "LA"],
    "USA": [
      "AL", "AK", "AZ", "AR", "CA", 
      "CO", "CT", "DE", "FL", "GA", 
      "HI", "ID", "IL", "IN", "IA", 
      "KS", "KY", "LA", "ME", "MD", 
      "MA", "MI", "MN", "MS", "MO", 
      "MT", "NE", "NV", "NH", "NJ", 
      "NM", "NY", "NC", "ND", "OH", 
      "OK", "OR", "PA", "RI", "SC", 
      "SD", "TN", "TX", "UT", "VT", 
      "VA", "WA", "WV", "WI", "WY"
    ]
  }

}
