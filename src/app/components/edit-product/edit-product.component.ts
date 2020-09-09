import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as cardAction from '../cards/store/card.actions';
import './edit-list-lit-element/list-button';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  selectToDelete: any;
  alertBoxFlag = false;
  noData = false;
  constructor(
    private httpService: UserHttpService,
    private router: Router,
    private store: Store<any>
  ) {}
  cardList: any;
  ngOnInit(): void {
    this.getAllCardList();
    this.store.subscribe((state) => {
      this.cardList = state.reducer.card;
      if (this.cardList.length == 0) {
        this.noData = true;
      } else {
        this.noData = false;
      }

      if (state.reducer?.message == 'Card Deleted') {
        this.alertBoxFlag = false;
      }
    });
  }

  getAllCardList() {
    this.store.dispatch(new cardAction.LoadCard());
  }

  editCard(card: any) {
    this.router.navigateByUrl('/home/edit-product/' + card.id);
  }
  deleteCard() {
    this.store.dispatch(new cardAction.DeleteCard(this.selectToDelete));
  }
  preDeleteCard(card: any) {
    this.selectToDelete = card.id;
    this.alertBoxFlag = true;
  }
}
