import { Route } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const customerRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',        
        component: CustomerListComponent,                                         
    },
        
    
];
