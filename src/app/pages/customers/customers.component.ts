import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import {IconComponent} from '../../components/icon/icon.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';


interface Customer {
  name: string;
  surname: string;
  company: string;
  invoiceValue: number;
}

@Component({
  selector: 'app-customers',
  imports: [TableModule, PaginatorModule, CardModule, IconComponent, ButtonModule, DialogModule, InputText],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  standalone: true
})

export class CustomersComponent {
  customers: Customer[] = [
    {name: 'Michael', surname: 'Schmidt', company: 'TechCorp GmbH', invoiceValue: 157850},
    {name: 'Laura', surname: 'Weber', company: 'Digital Solutions AG', invoiceValue: 89320},
    {name: 'Thomas', surname: 'Müller', company: 'Innovate IT', invoiceValue: 234600},
    {name: 'Sophie', surname: 'Wagner', company: 'CloudSys Solutions', invoiceValue: 45780},
    {name: 'Alexander', surname: 'Becker', company: 'DataFlow Systems', invoiceValue: 167900},
    {name: 'Emma', surname: 'Fischer', company: 'Smart Services KG', invoiceValue: 92450},
    {name: 'Marcus', surname: 'Hoffmann', company: 'NetWorks GmbH', invoiceValue: 128900},
    {name: 'Julia', surname: 'Koch', company: 'Future Tech AG', invoiceValue: 198650},
    {name: 'Felix', surname: 'Meyer', company: 'Software Plus', invoiceValue: 76540},
    {name: 'Hannah', surname: 'Schulz', company: 'Web Solutions', invoiceValue: 145780},
    {name: 'Lukas', surname: 'Richter', company: 'Cloud Nine Systems', invoiceValue: 187600},
    {name: 'Nina', surname: 'Klein', company: 'Digi Solutions GmbH', invoiceValue: 93400},
    {name: 'Sebastian', surname: 'Wolf', company: 'Cyber Security AG', invoiceValue: 256780},
    {name: 'Lena', surname: 'Schröder', company: 'Mobile Tech KG', invoiceValue: 134500},
    {name: 'David', surname: 'Neumann', company: 'AI Research Lab', invoiceValue: 289000},
    {name: 'Marie', surname: 'Krause', company: 'Smart Home Solutions', invoiceValue: 67890},
    {name: 'Philipp', surname: 'Werner', company: 'Data Analytics GmbH', invoiceValue: 178900},
    {name: 'Anna', surname: 'Schwarz', company: 'Network Systems AG', invoiceValue: 145600},
    {name: 'Robert', surname: 'Keller', company: 'IoT Concepts', invoiceValue: 198700},
    {name: 'Lisa', surname: 'Zimmermann', company: 'Digital Media Group', invoiceValue: 87650}
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
}
