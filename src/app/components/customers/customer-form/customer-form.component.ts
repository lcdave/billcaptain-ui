import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Customer} from '@shared/models';
import {NgClass, NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  imports: [
    ReactiveFormsModule,
    NgClass,
    Button,
    InputText,
    NgIf
  ],
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit, OnChanges {
  @Input() customer?: Customer;
  @Input() readOnly = false;
  @Output() formSubmit = new EventEmitter<Customer>();
  @Output() formCancel = new EventEmitter<void>();

  customerForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When customer input changes, reset the form
    if (changes['customer'] && this.customerForm) {
      this.resetForm();
    }

    // Handle readOnly changes
    if (changes['readOnly'] && this.customerForm) {
      this.toggleFormState();
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    const formValue = this.customerForm.value;
    const customerData: Customer = {
      ...formValue,
      id: this.customer?.id
    };

    this.formSubmit.emit(customerData);
  }

  onCancel(): void {
    this.formCancel.emit();
  }

  private initForm(): void {
    this.customerForm = this.fb.group({
      firstName: [this.customer?.firstName || '', Validators.required],
      lastName: [this.customer?.lastName || '', Validators.required],
      company: [this.customer?.company || '', Validators.required],
      invoiceValue: [this.customer?.invoiceValue || 0]
    });

    this.toggleFormState();
  }

  private toggleFormState(): void {
    if (this.readOnly) {
      this.customerForm.disable();
    } else {
      this.customerForm.enable();
    }
  }

  private resetForm(): void {
    if (this.customer) {
      this.customerForm.patchValue({
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        company: this.customer.company,
        invoiceValue: this.customer.invoiceValue
      });
    } else {
      this.customerForm.reset();
    }
    this.submitted = false;
  }
}
