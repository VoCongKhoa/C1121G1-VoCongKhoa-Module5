import {Customer} from "../models/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {CustomerDto} from "../dto/customerDto";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private apiBaseUrl: 'http://localhost:8080/api/customer';

  // De ben environment
  private apiBaseUrl = environment.apiBaseUrl;

  private customers: Customer[];
  constructor(
    private http: HttpClient
  ) {}

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.apiBaseUrl}/api/customer/list`);
  }

  delete(id: number): Observable<void> {
    return this.http.get<void>(`${this.apiBaseUrl}/api/customer/delete/${id}`);
  }

  create(data: CustomerDto): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/api/customer/create`, data);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/api/customer/detail/${id}`);
  }

  update(data: CustomerDto): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/api/customer/update/${data.customerId}`, data);
  }

  // private customers: Customer[] = [
  //   {
  //     customerId: 1,
  //
  //     customerCode: "KH-0001",
  //
  //     customerName: "Nguyễn Thị Hào",
  //
  //     customerBirthday: "1970-11-07",
  //
  //     customerGender: "0",
  //
  //     customerIdCard: "643431213",
  //
  //     customerPhone: "0905423362",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 5,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 2,
  //
  //     customerCode: "KH-0002",
  //
  //     customerName: "Phạm Xuân Diệu",
  //
  //     customerBirthday: "1992-08-08",
  //
  //     customerGender: "1",
  //
  //     customerIdCard: "865342123",
  //
  //     customerPhone: "0954333333",
  //
  //     customerEmail: "xuandieu92@gmail.com",
  //
  //     customerAddress: "K77/22 Thái Phiên, Quảng Trị",
  //
  //     customerTypeId: 4,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 3,
  //
  //     customerCode: "KH-0003",
  //
  //     customerName: "Trương Đình Nghệ",
  //
  //     customerBirthday: "1990-02-27",
  //
  //     customerGender: "1",
  //
  //     customerIdCard: "488645199",
  //
  //     customerPhone: "0373213122",
  //
  //     customerEmail: "nghenhan2702@gmail.com",
  //
  //     customerAddress: "K323/12 Ông Ích Khiêm, Vinh",
  //
  //     customerTypeId: 3,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 4,
  //
  //     customerCode: "KH-0004",
  //
  //     customerName: "Dương Văn Quan",
  //
  //     customerBirthday: "1981-07-08",
  //
  //     customerGender: "1",
  //
  //     customerIdCard: "543432111",
  //
  //     customerPhone: "0490039241",
  //
  //     customerEmail: "duongquan@gmail.com",
  //
  //     customerAddress: "K453/12 Lê Lợi, Đà Nẵng",
  //
  //     customerTypeId: 2,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 5,
  //
  //     customerCode: "KH-0005",
  //
  //     customerName: "Hoàng Trần Nhi Nhi",
  //
  //     customerBirthday: "1995-12-09",
  //
  //     customerGender: "0",
  //
  //     customerIdCard: "795453345",
  //
  //     customerPhone: "0312345678",
  //
  //     customerEmail: "nhinhi123@gmail.com",
  //
  //     customerAddress: "224 Lý Thái Tổ, Gia Lai",
  //
  //     customerTypeId: 1,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 6,
  //
  //     customerCode: "KH-0006",
  //
  //     customerName: "Tôn Nữ Mộc Châu",
  //
  //     customerBirthday: "2005-12-06",
  //
  //     customerGender: "0",
  //
  //     customerIdCard: "732434215",
  //
  //     customerPhone: "0988888844",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 5,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 7,
  //
  //     customerCode: "KH-0007",
  //
  //     customerName: "Nguyễn Mỹ Kim",
  //
  //     customerBirthday: "1984-04-08",
  //
  //     customerGender: "0",
  //
  //     customerIdCard: "856453123",
  //
  //     customerPhone: "0912345698",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 4,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 8,
  //
  //     customerCode: "KH-0008",
  //
  //     customerName: "Nguyễn Thị Hào",
  //
  //     customerBirthday: "1999-04-08",
  //
  //     customerGender: "0",
  //
  //     customerIdCard: "965656433",
  //
  //     customerPhone: "0763212345",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 3,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 9,
  //
  //     customerCode: "KH-0009",
  //
  //     customerName: "Trần Đại Danh",
  //
  //     customerBirthday: "1994-07-01",
  //
  //     customerGender: "1",
  //
  //     customerIdCard: "432341235",
  //
  //     customerPhone: "0643343433",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 2,
  //
  //     active: 1
  //   },
  //   {
  //     customerId: 10,
  //
  //     customerCode: "KH-0010",
  //
  //     customerName: "Nguyễn Tâm Đắc",
  //
  //     customerBirthday: "1989-07-01",
  //
  //     customerGender: "1",
  //
  //     customerIdCard: "344343432",
  //
  //     customerPhone: "0987654321",
  //
  //     customerEmail: "thihao07@gmail.com",
  //
  //     customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //
  //     customerTypeId: 1,
  //
  //     active: 1
  //   }
  // ];
  public getCustomers() {
    return this.customers;
  }

  public updateCustomer(customer: Customer){
    this.customers = this.customers.map(
      (c) => {
        if(c.customerId == customer.customerId){
          c = customer;
        }
        return c;
      }
    );
    console.log(this.customers);
  }

  public createCustomer(customer: Customer){
    customer.customerId = this.customers.length + 1;
    customer.active = 1;
    this.customers.push(customer);
  }

  // public findById(id:number){
  //   return this.customers.filter((c) => c.customerId == id);
  // }

  // delete(id: number) {
  //   this.customers = this.customers.filter((p) => p.id !== id);
  // }
}
