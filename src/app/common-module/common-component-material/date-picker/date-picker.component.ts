import {Component, Output, EventEmitter, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'app/common-service/service/toast-message.service';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls:[ './date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  
  @Input() titleFiled:string ="Select Date"
  @Input() mode:string ="outline"
  @Input() class:string ="w-11/12"
  @Input() isRequired:boolean =false;
  
  @Input() typeDate:string="M";  // M => Miladi, S => Shamsi
  //@Input() date:any="";
  _date: any;
  get date():any {
      return this._date;
  }
  @Input() set date(value: any) {
      this._date = value;
      this.onSelectedValue();
  }
  @Output() dateChange :EventEmitter<any> = new EventEmitter<any>();

  @Output() dateValueChange :EventEmitter<any> = new EventEmitter<any>();     
  

  dateFormControl =new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();  
  onSelectedValue(){
    debugger;
    if(this.isRequired){
      if(!this.matcher.isErrorState(this.dateFormControl, null)){
        this.dateChange.emit(this.date); 
        this.dateValueChange.emit(this._date);   
      }
    }else{
      this.dateChange.emit(this.date); 
      this.dateValueChange.emit(this._date);   
    }
  }

  constructor() {    
  }
  
  ngOnInit(){      
  }        

}