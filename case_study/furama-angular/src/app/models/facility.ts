import {RentType} from "./rentType";

export class Facility {
  // service_id, active, description_other_convenience, free_attached_service, number_of_floors, pool_area, service_area,
  // service_code, service_cost, service_max_people, service_name, standard_room, rent_type_id, service_type_id
  serviceId: number;
  serviceCode: string;
  serviceName: string;
  serviceImage: string;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloors: number;
  freeAttachedService: string;
  rentType: RentType;
  serviceTypeId: number;
  active: number;
}
