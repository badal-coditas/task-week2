import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as CardActions from '../cards/store/card.actions';
import { CardModal } from '../cards/modal/card.modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  submitted: boolean = false;
  userId: any = null;
  userImagePath = '';
  saveUserDataFlag = false;
  addEditText = 'Add';
  constructor(
    private formBuilder: FormBuilder,
    private userHttp: UserHttpService,
    private activatedroute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.activatedroute.params.subscribe((data) => {
      if (data?.id) {
        this.getDataAndAssignToform(data.id);
      }
    });
  }

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      companyName: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      selectedClass: ['Silver', Validators.required],
    });
  }
  get f() {
    return this.addProduct.controls;
  }

  addAndUpdateProductCard() {
    if (this.addProduct.valid) {
      const productData: any = this.getUserDataObject(this.userId);
      this.store.dispatch(new CardActions.AddCard(productData, this.userId));
      this.store.subscribe((state) => {
        this.saveUserDataFlag = true;
        this.addProduct.reset();
      });
    } else {
      this.submitted = true;
    }
  }
  getUserDataObject(id: any): CardModal {
    return {
      id: id || '',
      email: localStorage.getItem('userId'),
      companyName: this.f.companyName.value,
      quantity: this.f.quantity.value,
      price: this.f.price.value,
      cardClass: this.f.selectedClass.value,
      imagePath: '../../../assets/' + this.f.selectedClass.value + '.png',
    };
  }
  getDataAndAssignToform(id: any) {
    this.userHttp.getDataFor(id).subscribe((res) => {
      this.addEditText = 'Update';
      this.f.companyName.setValue(res[0].companyName);
      this.f.quantity.setValue(res[0].quantity);
      this.f.price.setValue(res[0].price);
      this.f.selectedClass.setValue(res[0].cardClass);
      this.userId = res[0].id;
      this.userImagePath = res[0].imagePath;
    });
  }
}
