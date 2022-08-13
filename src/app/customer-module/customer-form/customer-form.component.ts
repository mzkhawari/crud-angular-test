import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, NG_VALUE_ACCESSOR, FormGroupDirective } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NbToastStatus, ToastMessageService } from '../../common-service/service/toast-message.service';
import { CustomerDto } from '../model/customer.dto';
import libphonenumber from 'google-libphonenumber';
import { ErrorStateMatcher } from '@angular/material/core';
import { PhoneMaskDirective } from 'app/common-module/common-directive/directive/phone-mask.directive';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerFormComponent),
      multi: true
    },
  ]
})
export class CustomerFormComponent implements OnInit {

  @Input()
  model: CustomerDto ;
  @Output()
  OnSave: EventEmitter<CustomerDto> =  new EventEmitter();
  
  constructor( 
    public dialogRef: MatDialogRef<CustomerFormComponent>, 
    private toastMessageService : ToastMessageService ) {
    this.model = new CustomerDto();
  }

  
  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

  emailValidator: FormControl =  new FormControl('', [Validators.email, Validators.required]); 
  bankAccountValidator: FormControl =  new FormControl('', [Validators.required]); 
  dateValidator: FormControl =  new FormControl('', [Validators.required]); 

  

  isLoading:boolean =false;  
  isValidPhoneNumber:boolean =false;
  matcher = new MyErrorStateMatcher();
  OnSubmit(form:NgForm){
    debugger;
    if(this.model.DateOfBirth!=null && this.model.DateOfBirth!=undefined ) {
      let d = new Date(this.model.DateOfBirth);
      this.model.DateOfBirth = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }
    this.matcher.isErrorState(null,form);
    let phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    let p =  phoneUtil.parse(this.model.PhoneNumber, 'US')
    let validatePhone = phoneUtil.isValidNumber(p, 'US');
    if(!validatePhone){
      this.toastMessageService.showToast(NbToastStatus.WARNING,"Validating", "Please Enter Correct Phone Number!");
      return; 
    }

    
    if(form.valid){      
      this.OnSave.next(this.model);    
    } else{
      this.toastMessageService.showToast(NbToastStatus.WARNING,"Warning", "Please Fill Form Correctly!")
    }   
  }

  
}
