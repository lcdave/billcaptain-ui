import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {IconComponent} from '../../components/icon/icon.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {Customer} from '@shared/models';
import {CustomerFormComponent} from '../../components/customers/customer-form/customer-form.component';

@Component({
  selector: 'app-customers',
  imports: [TableModule, PaginatorModule, CardModule, IconComponent, ButtonModule, DialogModule, CustomerFormComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  standalone: true
})

export class CustomersComponent {
  customers: Customer[] = [
    {id: 1, firstName: 'Michael', lastName: 'Schmidt', company: 'TechCorp GmbH', invoiceValue: 157850},
    {id: 2, firstName: 'Laura', lastName: 'Weber', company: 'Digital Solutions AG', invoiceValue: 89320},
    {id: 3, firstName: 'Thomas', lastName: 'Müller', company: 'Innovate IT', invoiceValue: 234600},
    {id: 4, firstName: 'Sophie', lastName: 'Wagner', company: 'CloudSys Solutions', invoiceValue: 45780},
    {id: 5, firstName: 'Alexander', lastName: 'Becker', company: 'DataFlow Systems', invoiceValue: 167900},
    {id: 6, firstName: 'Emma', lastName: 'Fischer', company: 'Smart Services KG', invoiceValue: 92450},
    {id: 7, firstName: 'Marcus', lastName: 'Hoffmann', company: 'NetWorks GmbH', invoiceValue: 128900},
    {id: 8, firstName: 'Julia', lastName: 'Koch', company: 'Future Tech AG', invoiceValue: 198650},
    {id: 9, firstName: 'Felix', lastName: 'Meyer', company: 'Software Plus', invoiceValue: 76540},
    {id: 10, firstName: 'Hannah', lastName: 'Schulz', company: 'Web Solutions', invoiceValue: 145780},
    {id: 11, firstName: 'Lukas', lastName: 'Richter', company: 'Cloud Nine Systems', invoiceValue: 187600},
    {id: 12, firstName: 'Nina', lastName: 'Klein', company: 'Digi Solutions GmbH', invoiceValue: 93400},
    {id: 13, firstName: 'Sebastian', lastName: 'Wolf', company: 'Cyber Security AG', invoiceValue: 256780},
    {id: 14, firstName: 'Lena', lastName: 'Schröder', company: 'Mobile Tech KG', invoiceValue: 134500},
    {id: 15, firstName: 'David', lastName: 'Neumann', company: 'AI Research Lab', invoiceValue: 289000},
    {id: 16, firstName: 'Marie', lastName: 'Krause', company: 'Smart Home Solutions', invoiceValue: 67890},
    {id: 17, firstName: 'Philipp', lastName: 'Werner', company: 'Data Analytics GmbH', invoiceValue: 178900},
    {id: 18, firstName: 'Anna', lastName: 'Schwarz', company: 'Network Systems AG', invoiceValue: 145600},
    {id: 19, firstName: 'Robert', lastName: 'Keller', company: 'IoT Concepts', invoiceValue: 198700},
    {id: 20, firstName: 'Lisa', lastName: 'Zimmermann', company: 'Digital Media Group', invoiceValue: 87650}
  ];
  first: number = 0;
  rows: number = 10;
  createCustomerDialogVisible: boolean = false;

  showCreateCustomerDialog() {
    this.createCustomerDialogVisible = true;
  }

  editCustomer(customer: Customer) {
    console.log(customer);
  }

  deleteCustomer(customer: Customer) {
    console.log(customer);
  }

  onCreateCustomer(customer: Customer) {
    console.log("customer created", customer);
  }
}
