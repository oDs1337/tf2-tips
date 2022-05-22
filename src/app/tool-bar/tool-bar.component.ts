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

  scoutTip(): void{
    this.store.dispatch({ type: 'Scout'});
  }
  soldierTip(): void{
    this.store.dispatch({ type: 'Soldier'});
  }
  pyroTip(): void{
    this.store.dispatch({ type: 'Pyro'});
  }
  demomanTip(): void{
    this.store.dispatch({ type: 'Demoman'});
  }
  heavyTip(): void{
    this.store.dispatch({ type: 'Heavy'});
  }
  engineerTip(): void{
    this.store.dispatch({ type: 'Engineer'});
  }
  medicTip(): void{
    this.store.dispatch({ type: 'Medic'});
  }
  sniperTip(): void{
    this.store.dispatch({ type: 'Sniper'});
  }
  spyTip(): void{
    this.store.dispatch({ type: 'Spy'});
  }


}
