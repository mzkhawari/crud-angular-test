import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
const MODULES = [
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],  
  declarations: [
    SortByPipe,
    SearchPipe,
  ],  
  exports:[
    SortByPipe,
    SearchPipe,
  ],
  entryComponents: [

  ], 

})
export class CommonPipeModule {
  static forRoot(){
    return{
      NgModule : CommonPipeModule,
    }
  }
 }
