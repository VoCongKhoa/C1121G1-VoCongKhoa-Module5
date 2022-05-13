import {CustomerType} from "./customerType";

export class Customer {
  customerId: number;

  customerCode: string;

  customerName: string;

  customerBirthday: string;

  customerGender: string;

  customerIdCard: string;

  customerPhone: string;

  customerEmail: string;

  customerAddress: string;

  customerType: CustomerType;

  active: number = 1;
}
