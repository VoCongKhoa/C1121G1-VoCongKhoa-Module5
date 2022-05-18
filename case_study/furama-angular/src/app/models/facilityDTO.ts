
export class FacilityDTO {
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
  rentType: number;
  serviceType: number;
  active: number = 1;
}
