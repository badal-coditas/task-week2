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
  constructor(private userHttp: UserHttpService, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      if (state.userLoggedReducer.loggedStatus) {
        this.userLoggedflag = true;
      } else if (!state.userLoggedReducer.loggedStatus) {
        this.userLoggedflag = false;
      }
    });
  }
}
