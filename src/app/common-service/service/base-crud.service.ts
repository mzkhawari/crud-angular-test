import { Injectable } from '@angular/core';
import { map } from 'lodash';
import { Observable, of, throwError} from 'rxjs';
import { ServerValidationService } from '../error-handle/server-validation.service';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService  {

  constructor( private serverValidation: ServerValidationService ) {
     
  }  

  get(keyItem:string):Observable<any>{
    debugger;
    let values:any[] = JSON.parse(localStorage.getItem(keyItem));
    return  of(values);
  }  
  
  getById(keyItem:string, id:number):Observable<any>{
    let values:any[] = JSON.parse(localStorage.getItem(keyItem));
    return  of(values);
  }
  
  post(keyItem:string, model:any):Observable<any>{    
    let values :any[] =[];
    let dataArr = JSON.parse(localStorage.getItem(keyItem))

    if(dataArr ==null || dataArr ==undefined){
      model.Id =1;
      values.push(model);
    }else{
      if(this.serverValidation.checkEmailExist(dataArr, model.Email)){
        return throwError('Email is Exist in LocalStorage!');
      }

      if(!this.serverValidation.checkUniqeCustomer(dataArr, model.Firstname, model.Lastname, model.DateOfBirth)){
        return throwError('The Customer is Exist in LocalStorage!');
      }


      model.Id = dataArr[dataArr.length-1].Id + 1; 
      values = dataArr;
      values.push(model);
    }
    localStorage.setItem(keyItem, JSON.stringify(values));
    return of(true);
  }
  
  putData(keyItem:string, model:any, id:number):Observable<any>{
    let values:any[] = JSON.parse(localStorage.getItem(keyItem));
    if(values !=undefined && values.length>0){
      let index = values.findIndex(f=>f.Id == id);
      values[index] = model;
    }
    localStorage.setItem(keyItem, JSON.stringify(values));
    return of(true);
  }
  
  deleteById(keyItem:string, id:number):Observable<any>{
    let values:any[] = JSON.parse(localStorage.getItem(keyItem));
    if(values !=undefined && values.length>0){
      let index = values.findIndex(f=>f.Id == id);
      values.splice(index,1);
    }
    localStorage.setItem(keyItem, JSON.stringify(values));
    return of(true);
  }













  
}
