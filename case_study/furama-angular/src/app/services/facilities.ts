import {Facility} from "../models/facility";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FacilityDTO} from "../models/facilityDTO";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiBaseUrl = environment.apiBaseUrl;

  private facilities: Facility[];
  constructor(
    private http: HttpClient
  ) {}
  // private facilities: Facility[] = [
  //   {
  //     serviceId: 1,
  //     serviceCode: "DV-0001",
  //     serviceName: "Villa Beach Front",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 25000,
  //     serviceCost: 10000000,
  //     serviceMaxPeople: 10,
  //     standardRoom: "vip",
  //     descriptionOtherConvenience: "Có hồ bơi",
  //     poolArea: 500,
  //     numberOfFloors: 4,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 3,
  //       rentTypeName: "day",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 1,
  //     active: 1
  //   },
  //   {
  //     serviceId: 2,
  //     serviceCode: "DV-0002",
  //     serviceName: "House Princess 01",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 14000,
  //     serviceCost: 5000000,
  //     serviceMaxPeople: 7,
  //     standardRoom: "vip",
  //     descriptionOtherConvenience: "Có thêm bếp nướng",
  //     poolArea: 0,
  //     numberOfFloors: 3,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 2,
  //       rentTypeName: "month",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 2,
  //     active: 1
  //   },
  //   {
  //     serviceId: 3,
  //     serviceCode: "DV-0003",
  //     serviceName: "Room Twin 01",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 5000,
  //     serviceCost: 1000000,
  //     serviceMaxPeople: 2,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có tivi",
  //     poolArea: 0,
  //     numberOfFloors: 0,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 4,
  //       rentTypeName: "hour",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 3,
  //     active: 1
  //   },
  //   {
  //     serviceId: 4,
  //     serviceCode: "DV-0004",
  //     serviceName: "Villa No Beach Front",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 22000,
  //     serviceCost: 9000000,
  //     serviceMaxPeople: 8,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có hồ bơi",
  //     poolArea: 300,
  //     numberOfFloors: 3,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 3,
  //       rentTypeName: "day",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 1,
  //     active: 1
  //   },
  //   {
  //     serviceId: 5,
  //     serviceCode: "DV-0005",
  //     serviceName: "House Princess 02",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 10000,
  //     serviceCost: 4000000,
  //     serviceMaxPeople: 5,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có thêm bếp nướng",
  //     poolArea: 0,
  //     numberOfFloors: 2,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 3,
  //       rentTypeName: "day",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 2,
  //     active: 1
  //   },
  //   {
  //     serviceId: 6,
  //     serviceCode: "DV-0006",
  //     serviceName: "Room Twin 02",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 3000,
  //     serviceCost: 900000,
  //     serviceMaxPeople: 2,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có tivi",
  //     poolArea: 0,
  //     numberOfFloors: 0,
  //     freeAttachedService: "",
  //     rentType: {
  //       rentTypeId: 4,
  //       rentTypeName: "hour",
  //       rentTypeCost: 10000000,
  //       active: 1
  //     },
  //     serviceTypeId: 3,
  //     active: 1
  //   }
  // ]
  public getFacilities(){
    return this.facilities;
  }

  // findById(id: number) {
  //   return this.facilities.filter(f => f.serviceId == id);
  // }

  findById(id: number) {
    return this.http.get<any>(`${this.apiBaseUrl}/api/facility/detail/${id}`);
  }

  // updateFacility(facility: Facility) {
  //   this.facilities = this.facilities.map(
  //     (c) => {
  //       if(c.serviceId == facility.serviceId){
  //         c = facility;
  //       }
  //       return c;
  //     }
  //   );
  // }

  // createFacility(facility: Facility) {
  //   facility.serviceId = this.facilities.length + 1;
  //   facility.active = 1;
  //   facility.serviceImage = 'https://mediawiki.ivao.aero/images/9/9e/NEW.jpg';
  //   this.facilities.push(facility);
  // }

  delete(id: number) {
    return this.http.get<void>(`${this.apiBaseUrl}/api/facility/delete/${id}`);
  }

  getAllFacilities() {
    return this.http.get<Facility[]>(`${this.apiBaseUrl}/api/facility/list`);
  }

  update(data: FacilityDTO): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/api/facility/update/${data.serviceId}`, data);
  }

  create(data: FacilityDTO): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/api/facility/create`, data);
  }
}
