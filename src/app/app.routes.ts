import {Routes} from '@angular/router';
import {CustomersComponent} from './pages/customers/customers.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'customers', component: CustomersComponent}
];
