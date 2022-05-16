import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit, OnChanges {

  productUpdateForm: FormGroup;
  product: Product;
  @Input() productUpdateChild: Product;
  // @Input() productDelete: Product;
  // @ts-ignore
  @ViewChild('btnUpdateClose') btnUpdateClose;
  // @ts-ignore
  @ViewChild('btnDeleteClose') btnDeleteClose;

  @Output() flagUpdate = new EventEmitter();

  constructor(private fb: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.productUpdateForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      description: [''],
    });

    this.productUpdateChild = {
      id: 0,
      name: '',
      price: 0,
      description: ''
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('productUpdateChild' in changes) {
      let productTemp: Product = changes.productUpdateChild.currentValue;
      productTemp = typeof productTemp === 'undefined' ? null : productTemp;
      if (productTemp != null) {
        this.productUpdateForm.patchValue({id: productTemp.id});
        this.productUpdateForm.patchValue({name: productTemp.name});
        this.productUpdateForm.patchValue({price: productTemp.price});
        this.productUpdateForm.patchValue({description: productTemp.description});
        this.productUpdateChild = productTemp;
      }
    }
  }


  updateProduct() {
    // Phai gan tung gia tri boi vi neu truyen nguyen Form sang, thi ten cua cac truong thuoc tinh se bi sai
    // Vi du: id se thanh idUpdate
    this.productService.putProduct(this.productUpdateForm.value, this.productUpdateChild.id).subscribe(
      (response) => {
        this.btnUpdateClose.nativeElement.click();
        const flag = true;
        this.flagUpdate.emit(flag);
      },
      (error => {
        alert('FAILED');
      }));
  }

  delete() {
    // console.log(this.productUpdateChild);
    this.productService.deleteProduct(this.productUpdateChild.id).subscribe(
      (response) => {
        this.btnDeleteClose.nativeElement.click();
        const flag = true;
        this.flagUpdate.emit(flag);
      },
      (error => {
        alert('FAILED');
      }));
  }
}
