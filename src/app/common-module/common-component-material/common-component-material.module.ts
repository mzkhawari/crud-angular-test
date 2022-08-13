import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppGridComponent } from './app-grid/app-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppGridHeaderComponent } from './app-grid-header/app-grid-header.component';
import { CommonDirectiveModule } from '../common-directive/common-directive.module';
import { CommonPipeModule } from '../common-pipe/common-pipe.module';
import { MatTreeModule } from '@angular/material/tree';
import { GridHeaderComponent } from './app-grid/grid-header/grid-header.component';
import { PageHeaderComponent } from './app-page-header/app-page-header.component';
import { DxButtonModule, DxChartModule, DxDataGridModule, DxDropDownBoxModule, DxFunnelModule, DxListModule, DxPieChartModule, DxTreeListModule } from 'devextreme-angular';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';

const MODULES = [
];

@NgModule({
  imports: [
    DxDropDownBoxModule,  
    DxDataGridModule,
    DxListModule,
    DxTreeListModule,
    DxChartModule,
    DxPieChartModule,
    DxButtonModule,
    DxFunnelModule,

    MatButtonModule,
    
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FuseFindByKeyPipeModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTreeModule,    
    MatDialogModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    CommonDirectiveModule,
    CommonPipeModule,
    //...MODULES,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],  
  declarations: [
    AppGridComponent,
    AppGridHeaderComponent,
    GridHeaderComponent,
    PageHeaderComponent,
    DatePickerComponent,
  ],  
  exports:[
    

    AppGridComponent,
    AppGridHeaderComponent,
    GridHeaderComponent,
    PageHeaderComponent,
    DatePickerComponent,
  ],
  entryComponents: [

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]

})
export class CommonComponentMaterialModule {
  static forRoot(){
    return{
      NgModule : CommonComponentMaterialModule,
    }
  }
 }
