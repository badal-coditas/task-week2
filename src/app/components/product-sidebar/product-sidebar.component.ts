import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/user-http/user-http.service';
import { VariablesActions } from 'src/app/constant-variable/constants';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss'],
})
export class ProductSidebarComponent implements OnInit {
  userLoggedflag: any;
  sideBarList: any;
  constructor(
    private userHttp: UserHttpService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      if (state.userLoggedReducer.loggedStatus.toString() == 'true') {
        this.userLoggedflag = true;
      } else if (state.userLoggedReducer.loggedStatus.toString() == 'false') {
        this.userLoggedflag = false;
      }
    });
    this.sideBarList = [
      { routerLink: '/home', menuName: 'All Card List', userLoggedflag: true },
      {
        routerLink: '/home/add-product',
        menuName: 'Add Card',
        userLoggedflag: this.userLoggedflag,
      },
      {
        routerLink: '/home/edit-product',
        menuName: 'Edit Your Cards',
        userLoggedflag: this.userLoggedflag,
      },
    ];
  }
}
