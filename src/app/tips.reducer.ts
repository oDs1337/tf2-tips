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
import { Character } from './character';

export function tipsReducer(state: Character = { name: '', tip: '' }, action: Action){

  function generateRandomNumber(arrayLength: number): number{
    const min = Math.ceil(0);
    const max = Math.floor(arrayLength);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  switch (action.type) {
    case 'Scout':
      //return state = scoutTips[generateRandomNumber(scoutTips.length)];
      return state = { name: 'Scout', tip: scoutTips[generateRandomNumber(scoutTips.length)] }

    case 'Soldier':
      return state = { name: 'Soldier', tip: soldierTips[generateRandomNumber(soldierTips.length)] }

    case 'Pyro':
      return state = { name: 'Pyro', tip: pyroTips[generateRandomNumber(pyroTips.length)] }

    case 'Demoman':
      return state = { name: 'Demoman', tip: demomanTips[generateRandomNumber(demomanTips.length)] }

    case 'Heavy':
      return state = { name: 'Heavy', tip: heavyTips[generateRandomNumber(heavyTips.length)] }

    case 'Engineer':
      return state = { name: 'Engineer', tip: engineerTips[generateRandomNumber(engineerTips.length)] }

    case 'Medic':
      return state = { name: 'Medic', tip: medicTips[generateRandomNumber(medicTips.length)] }

    case 'Sniper':
      return state = { name: 'Sniper', tip: sniperTips[generateRandomNumber(sniperTips.length)] }

    case 'Spy':
      return state = { name: 'Spy', tip: spyTips[generateRandomNumber(spyTips.length)] }

    default:
      return state;
  }

}


