import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: '/app/customer' },

    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: '/app/customer' },

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        pathMatch: 'full', 
        children: [
            { path: 'customer', loadChildren: () => import('./customer-module/customer.module').then(m => m.CustomerModule) },
        ]
    }
];
