import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contract} from "../../../models/contract";
import {ContractService} from "../../../services/contracts";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-contract-modal',
  templateUrl: './contract-modal.component.html',
  styleUrls: ['./contract-modal.component.css']
})
export class ContractModalComponent implements OnInit {
  @Input('contractChild') contractDelete: Contract;
  @Output() flagDelete = new EventEmitter();
  @ViewChild('btnDeleteClose') btnDeleteClose;
  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractDelete = {
      contractId: 1,
      contractStartDate: '',
      contractEndDate: '',
      contractDeposit: 0,
      contractTotalMoney: 0,
      employee: {
        employeeId: 3,
        employeeName: 'Hồ Thị Yến',
        employeeBirthday: '1995-12-12',
        employeeIdCard: '999231723',
        employeeSalary: 14000000,
        employeePhone: '0412352315',
        employeeEmail: 'thiyen@gmail.com',
        employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
        positionId: 1,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 1,

        customerCode: "KH-0001",

        customerName: "Nguyễn Thị Hào",

        customerBirthday: "1970-11-07",

        customerGender: "0",

        customerIdCard: "643431213",

        customerPhone: "0905423362",

        customerEmail: "thihao07@gmail.com",

        customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",

        customerType: {
          customerTypeId: 5,
          customerTypeName: "Member",
          active: 1
        },

        active: 1
      },
      services: {
        serviceId: 3,
        serviceCode: "DV-0003",
        serviceName: "Room Twin 01",
        serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
        serviceArea: 5000,
        serviceCost: 1000000,
        serviceMaxPeople: 2,
        standardRoom: "normal",
        descriptionOtherConvenience: "Có tivi",
        poolArea: 0,
        numberOfFloors: 0,
        freeAttachedService: "",
        rentType: {
          rentTypeId: 4,
          rentTypeName: "hour",
          rentTypeCost: 10000000,
          active: 1
        },
        serviceTypeId: 3,
        active: 1
      },
      active: 1
    }
  }

  delete() {
    this.contractService.delete(this.contractDelete.contractId).subscribe(
      (response: void) => {
        this.flagDelete.emit(true);
        this.contractService.getAllContract();
        console.log('OK');
      },
      (error: HttpErrorResponse) => {
        console.log('Failed');
      }
    );
    this.btnDeleteClose.nativeElement.click();
  }
}
