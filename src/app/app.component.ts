import { Component } from '@angular/core';
import { Employee } from './employee';
import { Address } from './address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  employeeProfiles = ["Developer", "Tester", "B.A.", "Manager"];
  employeeModel = new Employee("Aman","Developer","male",true, new Address("111", "Noida", "12345"));
  constructor(){
    //this.employeeModel.name = "nakcdhnjo";
  }
  data:any = [];
  temp = false;
  
  submit(employeeForm:any){
    // this.data = employeeForm.value;
    this.temp = true;
    this.data.push(employeeForm.value);
    console.log(employeeForm.value);
  }
}
