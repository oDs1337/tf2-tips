import { generateScoutTip } from './tips.actions';
import { spyTips } from './database/spy-mock';
import { sniperTips } from './database/sniper-mock';
import { medicTips } from './database/medic-mock';
import { engineerTips } from './database/engineer-mock';
import { heavyTips } from './database/heavy-mock';
import { demomanTips } from './database/demoman-mock';
import { pyroTips } from './database/pyro-mock';
import { soldierTips } from './database/soldier-mock';
import { scoutTips } from './database/scout-mock';
import { Action, createReducer, on } from "@ngrx/store";
import { Character } from './character';

export type CharacterState = Character;

const initialState: CharacterState = { name: '', tips: [], image: '' };

export const tipReducer = createReducer(
  initialState,
  on(generateScoutTip, (state: CharacterState) => ({ ...state, name: 'Scout', tips: scoutTips, image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_scout.jpg' })),
)

export function tipsReducer(state: CharacterState = initialState, action: Action){

  // return createReducer(
  //   initialState,
  //   on('Scout', {...state, name: 'Scout', tips: scoutTips, image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_scout.jpg' }),
  // )

  switch (action.type) {
    case 'Scout':
      return {...state, name: 'Scout', tips: scoutTips, image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_scout.jpg' };

    case 'Soldier':
      return {...state, name: 'Soldier', tips: soldierTips, image: 'https://wiki.teamfortress.com/w/images/c/c1/Icon_soldier.jpg' };

    case 'Pyro':
      return {...state, name: 'Pyro', tips: pyroTips, image: 'https://wiki.teamfortress.com/w/images/1/13/Icon_pyro.jpg' };

    case 'Demoman':
      return {...state, name: 'Demoman', tips: demomanTips, image: 'https://wiki.teamfortress.com/w/images/c/c0/Icon_demoman.jpg' };

    case 'Heavy':
      return {...state, name: 'Heavy', tips: heavyTips, image: 'https://wiki.teamfortress.com/w/images/8/8e/Icon_heavy.jpg' };

    case 'Engineer':
      return {...state, name: 'Engineer', tips: engineerTips, image: 'https://wiki.teamfortress.com/w/images/b/bc/Icon_engineer.jpg' };

    case 'Medic':
      return {...state, name: 'Medic', tips: medicTips, image: 'https://wiki.teamfortress.com/w/images/f/f5/Icon_medic.jpg' };

    case 'Sniper':
      return {...state, name: 'Sniper', tips: sniperTips, image: 'https://wiki.teamfortress.com/w/images/a/ac/Icon_sniper.jpg' };

    case 'Spy':
      return {...state, name: 'Spy', tips: spyTips, image: 'https://wiki.teamfortress.com/w/images/9/9b/Icon_spy.jpg' };

    default:
      return state;
  }

}


