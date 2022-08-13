import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { CommonComponentMaterialModule } from './common-module/common-component-material/common-component-material.module';
import { CommonDirectiveModule } from './common-module/common-directive/common-directive.module';
import { NgxCurrencyModule } from "ngx-currency";

import { CurrencyMaskModule , CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { CustomerModule } from './customer-module/customer.module';
import { TestingComponent } from './testing/testing.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    useHash: true,
    enableTracing: false,
};

const config: ExtraOptions = {
    useHash: true,
    enableTracing: false,
  };


  export const customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 0,
    prefix: "",
    suffix: "",
    thousands: ".",
    nullable: true
  };


@NgModule({
    declarations: [
        AppComponent,
        TestingComponent
    ],
    imports     : [
        BrowserModule,
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
        CurrencyMaskModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        MatSelectModule,      
        MatAutocompleteModule,  
        CustomerModule,
        CommonComponentMaterialModule,
        CommonDirectiveModule,
        CommonModule
    ],
    providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          }
        },
        { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }
        // ... other providers like services
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],  
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}


