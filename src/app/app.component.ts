import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import './components/error/error-box';
import * as fromCard from './components/cards/store/card.reducer';
import * as CardActions from './components/cards/store/card.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  errorMessage:any;
  errorMessage$:Observable<any>;
  httpError:boolean = false;
  constructor( private store: Store<fromCard.AppSate>){

  }
  ngOnInit(): void {
    this.store.dispatch(new CardActions.DbInit())
    this.errorMessage$ = this.store.pipe(select(fromCard.getDbError));
    this.errorMessage$.subscribe(res=>{
      if(res.name == 'HttpErrorResponse'){
          this.httpError = true;
          this.errorMessage = "Check your API Connection OR Restart JSON server"
      }
    })
  }

  
}
