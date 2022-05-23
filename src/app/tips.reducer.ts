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

export function tipsReducer(state: Character = { name: '', tip: '', image: '' }, action: Action){

  function generateRandomNumber(arrayLength: number): number{
    const min = Math.ceil(0);
    const max = Math.floor(arrayLength);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  switch (action.type) {
    case 'Scout':
      return state = { name: 'Scout', tip: scoutTips[generateRandomNumber(scoutTips.length)], image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_scout.jpg' }

    case 'Soldier':
      return state = { name: 'Soldier', tip: soldierTips[generateRandomNumber(soldierTips.length)], image: 'https://wiki.teamfortress.com/w/images/c/c1/Icon_soldier.jpg' }

    case 'Pyro':
      return state = { name: 'Pyro', tip: pyroTips[generateRandomNumber(pyroTips.length)], image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_pyro.jpg' }

    case 'Demoman':
      return state = { name: 'Demoman', tip: demomanTips[generateRandomNumber(demomanTips.length)], image: 'https://wiki.teamfortress.com/w/images/c/c0/Icon_demoman.jpg' }

    case 'Heavy':
      return state = { name: 'Heavy', tip: heavyTips[generateRandomNumber(heavyTips.length)], image: 'https://wiki.teamfortress.com/w/images/8/8e/Icon_heavy.jpg' }

    case 'Engineer':
      return state = { name: 'Engineer', tip: engineerTips[generateRandomNumber(engineerTips.length)], image: 'https://wiki.teamfortress.com/w/images/b/bc/Icon_engineer.jpg' }

    case 'Medic':
      return state = { name: 'Medic', tip: medicTips[generateRandomNumber(medicTips.length)], image: 'https://wiki.teamfortress.com/w/images/f/f5/Icon_medic.jpg' }

    case 'Sniper':
      return state = { name: 'Sniper', tip: sniperTips[generateRandomNumber(sniperTips.length)], image: 'https://wiki.teamfortress.com/w/images/a/ac/Icon_sniper.jpg' }

    case 'Spy':
      return state = { name: 'Spy', tip: spyTips[generateRandomNumber(spyTips.length)], image: 'https://wiki.teamfortress.com/w/images/9/9b/Icon_spy.jpg' }

    default:
      return state;
  }

}


