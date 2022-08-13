import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonComponentMaterialModule } from 'app/common-module/common-component-material/common-component-material.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { customerRoutes } from './customer.routing';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonDirectiveModule } from 'app/common-module/common-directive/common-directive.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [
        CustomerListComponent,
        CustomerFormComponent,
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(customerRoutes),
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        CdkAccordionModule,
        MatDialogModule,
        MatSnackBarModule, 
        MatDatepickerModule,
        CommonComponentMaterialModule,
        CommonDirectiveModule
        
    ],
    schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
     ],
})
export class CustomerModule
{
}
