import {Employee} from "../models/employee";
import {Customer} from "../models/customer";
import {Facility} from "../models/facility";

export class ContractDto {
  contractId:number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employee: number;
  customer: number;
  services: number;
  active: number;
}
