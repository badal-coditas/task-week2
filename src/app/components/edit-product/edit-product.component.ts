import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as cardAction from '../cards/store/card.actions';
import './edit-list-lit-element/list-button';
import { Observable } from 'rxjs';
import { CardModal } from '../cards/modal/card.modal';
import * as fromCard from '../cards/store/card.reducer';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  selectToDelete: any;
  alertBoxFlag = false;
  noData = false;
  deleteMessage$: Observable<any>;
  constructor(
    private httpService: UserHttpService,
    private router: Router,
    private store: Store<any>
  ) {}
  cardList$: Observable<CardModal[]>;
  ngOnInit(): void {
    this.getAllCardList();
    this.cardList$ = this.store.pipe(select(fromCard.getCards));
    this.deleteMessage$ = this.store.pipe(select(fromCard.getMessage));
    this.deleteMessage$.subscribe((res) => {
      if (res == 'Card Deleted') {
        this.alertBoxFlag = false;
      }
    });
    this.cardList$.subscribe((res) => {
      if (res.length == 0) {
        this.noData = true;
      } else {
        this.noData = false;
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
