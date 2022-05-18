import {CustomerType} from "../models/customerType"
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private apiBaseUrl = environment.apiBaseUrl;

  private customerTypes: CustomerType[];

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCustomerTypes() {
    return this.http.get<CustomerType[]>(`${this.apiBaseUrl}/api/customerType/list`);
  }

  public getCustomerTypes() {
    let customerTypes: CustomerType[];
    customerTypes = [
      {
        customerTypeId: 1,
        customerTypeName: "Diamond",
        active: 1
      },
      {
        customerTypeId: 2,
        customerTypeName: "Platinium",
        active: 1
      },
      {
        customerTypeId: 3,
        customerTypeName: "Gold",
        active: 1
      },
      {
        customerTypeId: 4,
        customerTypeName: "Silver",
        active: 1
      },
      {
        customerTypeId: 5,
        customerTypeName: "Member",
        active: 1
      }
    ];
    return customerTypes;
  }
}
