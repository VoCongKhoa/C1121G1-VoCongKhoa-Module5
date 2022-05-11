import {Customer} from "./customer";
import {Facility} from "./facility";
import {Employee} from "./employee";

export class Contract {
  contractId:number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employee: Employee;
  customer: Customer;
  services: Facility;
  active: number;
}
