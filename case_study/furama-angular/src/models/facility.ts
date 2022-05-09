export class Facility {
  // service_id, active, description_other_convenience, free_attached_service, number_of_floors, pool_area, service_area,
  // service_code, service_cost, service_max_people, service_name, standard_room, rent_type_id, service_type_id
  serviceId: number;
  serviceCode: String;
  serviceName: String;
  serviceImage: String;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  standardRoom: String;
  descriptionOtherConvenience: String;
  poolArea: number;
  numberOfFloors: number;
  freeAttachedService?: String;
  rentTypeId: number;
  serviceTypeId: number;
  active: number;
}
