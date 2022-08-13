import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerValidationService {

  constructor() { 
  }

  checkEmailExist(data:any[], email:string):boolean{
    let index = data.findIndex(f=>f.Email == email);
    return index >= 0 ? true :false;
  }

  checkUniqeCustomer(data:any[], firstname:string, lastname:string, dateOfBirth:any):boolean{
    let index = data.findIndex(f=>f.Firstname == firstname  && f.Lastname == lastname && f.DateOfBirth == dateOfBirth );
    return index >= 0 ? false :true;
  }

  
}
