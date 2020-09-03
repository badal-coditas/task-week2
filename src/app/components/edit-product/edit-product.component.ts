import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  selectToDelete;
  alertBoxFlag = false;
  constructor(private httpService: UserHttpService,
    private router: Router) { }
  cardlist;
  ngOnInit(): void {
    this.getAllCardList();
  }

  getAllCardList() {
    this.httpService.getAllCardsData().subscribe(res => {
      this.cardlist = res;
    });
  }

  editCard(card) {
    this.router.navigateByUrl('/home/edit-product/' + card.id);
  }
  deleteCard() {
    this.httpService.deleteCard(this.selectToDelete).subscribe(res => {
      this.getAllCardList();
      this.alertBoxFlag = false;
    });
  }
  preDeleteCard(card) {
    this.selectToDelete = card.id;
    this.alertBoxFlag = true;
  }

}
