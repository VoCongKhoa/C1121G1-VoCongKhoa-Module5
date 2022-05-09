import {Customer} from "./customer";
import {Facility} from "./facility";

export class Contract {
  contractId:number;
  contractStartDate: String;
  contractEndDate: String;
  contractDeposit: number;
  contractTotalMoney: number;
  employeeId: number;
  customer: Customer;
  services: Facility;
  active: number;
}
