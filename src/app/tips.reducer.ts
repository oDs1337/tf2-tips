import { spyTips } from './database/spy-mock';
import { sniperTips } from './database/sniper-mock';
import { medicTips } from './database/medic-mock';
import { engineerTips } from './database/engineer-mock';
import { heavyTips } from './database/heavy-mock';
import { demomanTips } from './database/demoman-mock';
import { pyroTips } from './database/pyro-mock';
import { soldierTips } from './database/soldier-mock';
import { scoutTips } from './database/scout-mock';
import { Action } from "@ngrx/store";

export function tipsReducer(state: string = 'Choose class', action: Action){
  console.log(action.type, state);

  function generateRandomNumber(arrayLength: number): number{
    const min = Math.ceil(0);
    const max = Math.floor(arrayLength);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  switch (action.type) {
    case 'Scout':
      return state = scoutTips[generateRandomNumber(scoutTips.length)];

    case 'Soldier':
      return state = soldierTips[generateRandomNumber(soldierTips.length)];

    case 'Pyro':
      return state = pyroTips[generateRandomNumber(pyroTips.length)];

    case 'Demoman':
      return state = demomanTips[generateRandomNumber(demomanTips.length)];

    case 'Heavy':
      return state = heavyTips[generateRandomNumber(heavyTips.length)];

    case 'Engineer':
      return state = engineerTips[generateRandomNumber(engineerTips.length)];

    case 'Medic':
      return state = medicTips[generateRandomNumber(medicTips.length)];

    case 'Sniper':
      return state = sniperTips[generateRandomNumber(sniperTips.length)];

    case 'Spy':
      return state = spyTips[generateRandomNumber(spyTips.length)];

    default:
      return state;
  }

}


