import { Component } from '@angular/core';
import { Employee } from './employee';
import { Address } from './address';
import { EmployeeRegistrationService } from './employee-registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  employeeProfiles = ["Developer", "Tester", "B.A.", "Manager"];
  employeeModel = new Employee("","","",false, new Address("", "", ""));
  profileHasError = true;
  formData:any = [];
  constructor(private _employeeRegistrationService:EmployeeRegistrationService){
    //this.employeeModel.name = "nakcdhnjo";
  }
  
  validateProfile(value:string){
    let found = false;
    this.employeeProfiles.forEach(profile=>{
      if(profile == value){
        found = true;
      }
    });
    this.profileHasError = !found;
  }

  submit(employeeForm:NgForm){
    console.log(employeeForm)
    this.formData.push(this.employeeModel);
    this._employeeRegistrationService.registerEmployee(this.employeeModel)
        .subscribe(
          data=> console.log("Success",data),
          error=> console.log("Error!", error)
        );
  }
}
