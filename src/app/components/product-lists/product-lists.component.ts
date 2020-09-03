import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  constructor(private userHttp: UserHttpService) { }

  ngOnInit(): void {

  }

}
