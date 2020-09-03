import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private httpService: UserHttpService) { }
  cardlist;
  ngOnInit(): void {
    this.getAllCardList();
  }

  getAllCardList() {
    this.httpService.getAllCardsData().subscribe(res => {
      this.cardlist = res;
    });
  }

}
