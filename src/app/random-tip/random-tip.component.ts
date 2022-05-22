import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../AppState';
import { Store } from '@ngrx/store';
import { characterNames } from '../database/characterNames';

@Component({
  selector: 'app-random-tip',
  templateUrl: './random-tip.component.html',
  styleUrls: ['./random-tip.component.css']
})
export class RandomTipComponent implements OnInit {

  tip$?: Observable<string>;
  currentClass?: string;

  constructor(private store: Store<AppState>) {
    this.tip$ = this.store.select('tip');

   }

  ngOnInit(): void {
  }



}
