import { Action } from "@ngrx/store";

export function tipsReducer(state: string = '', action: Action){
  console.log(action.type, state);

  let englishTips = [
    "As a Scout, jump while in mid-air to change direction and avoid enemy fire.",
    "As a Scout, you capture Control Points and push Payload carts twice as fast as other classes.",
    "As a Scout, you're most effective when you stay moving and use your speed to your advantage.",
  ];
  let polishTips = [
    "Skaut może wykonać podwójny skok, aby zmienić kierunek i uniknąć ostrzału nieprzyjaciela.",
    "Skaut zdobywa punkty kontrolne i popycha wózki z ładunkiem dwukrotnie szybciej niż inne klasy.",
    "Skaut jest najskuteczniejszy, gdy pozostaje w ruchu i wykorzystuje swoją szybkość.",
  ];

  const min = Math.ceil(0);
  const max = Math.floor(englishTips.length);

  switch (action.type) {
    case 'ENGLISH':
      return state = englishTips[Math.floor(Math.random() * (max - min)) + min];

    case 'POLISH':
      return state = polishTips[Math.floor(Math.random() * (max - min)) + min];

    default:
      return state;
  }
}
