import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directive/phone-mask.directive';
import { BankAccountDirective } from './directive/bank-account.directive';
const MODULES = [
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],  
  declarations: [
    PhoneMaskDirective,
    BankAccountDirective,
  ],  
  exports:[
    PhoneMaskDirective,
    BankAccountDirective
  ],
  entryComponents: [

  ], 

})
export class CommonDirectiveModule {
  static forRoot(){
    return{
      NgModule : CommonDirectiveModule,
    }
  }
 }
