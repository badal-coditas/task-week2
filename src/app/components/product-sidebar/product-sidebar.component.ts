import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { VariablesActions } from 'src/app/constant-variable/constants';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss'],
})
export class ProductSidebarComponent implements OnInit {
  userLoggedflag: any;
  sideBarList: any;
  constructor(private userHttp: UserHttpService, private store: Store<any>) {}

  ngOnInit(): void {
    this.sideBarList = [
      { routerLink: '/home', menuName: 'All Card List' },
      { routerLink: '/home/add-product', menuName: 'Add Card' },
      { routerLink: '/home/edit-product', menuName: 'Edit Your Cards' },
    ];
    this.store.subscribe((state) => {
      if (state.userLoggedReducer.loggedStatus) {
        this.userLoggedflag = true;
      } else if (!state.userLoggedReducer.loggedStatus) {
        this.userLoggedflag = false;
      }
    });
  }
}
