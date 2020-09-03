import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  allCards: any;
  constructor(private userHttp: UserHttpService) { }

  ngOnInit(): void {
    this.userHttp.getAllCardsData().subscribe(res => {
      this.allCards = res;
      console.log(this.allCards, res);
    });
  }

}