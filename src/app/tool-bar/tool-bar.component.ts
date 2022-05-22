import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../AppState';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  englishTip(): void{
    this.store.dispatch({ type: 'ENGLISH'});
  }

  polishTip(): void{
    this.store.dispatch({ type: 'POLISH'});
  }

}
