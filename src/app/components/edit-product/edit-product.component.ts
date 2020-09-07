import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as cardAction from '../cards/store/card.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  selectToDelete: any;
  alertBoxFlag = false;
  constructor(
    private httpService: UserHttpService,
    private router: Router,
    private store: Store<any>
  ) {}
  cardlist: any;
  ngOnInit(): void {
    this.getAllCardList();
  }

  getAllCardList() {
    // this.httpService.getAllCardsData().subscribe(res => {
    //   this.cardlist = res;
    // });
    this.store.dispatch(new cardAction.LoadCard());
    this.store.subscribe((state) => {
      this.cardlist = state.reducer.card;
    });
  }

  editCard(card: any) {
    this.router.navigateByUrl('/home/edit-product/' + card.id);
  }
  deleteCard() {
    this.httpService.deleteCard(this.selectToDelete).subscribe((res) => {
      this.getAllCardList();
      this.alertBoxFlag = false;
    });
  }
  preDeleteCard(card: any) {
    this.selectToDelete = card.id;
    this.alertBoxFlag = true;
  }
}
