import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private userHttp: UserHttpService) { }

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      companyName: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      selectedClass: ['Select Card Type', Validators.required]
    });
  }
  get f() { return this.addProduct.controls; }

  addProductCard() {
    console.log(this.addProduct);

    if (this.addProduct.valid) {
      const productData = {
        "id": '',
        "email": "",
        "companyName": this.f.companyName.value,
        "quantity": this.f.quantity.value,
        "price": this.f.price.value,
        "cardClass": this.f.selectedClass.value,
        "imagePath": ""
      }
      console.log(productData);
      this.userHttp.addProduct(productData).subscribe(resData => {
        console.log(resData);
      })
    } else {
      this.submitted = true;
    }

  }
}