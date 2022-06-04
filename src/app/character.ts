import { characterNames } from './database/characterNames';
export interface Character {
  name: characterNames | null,
  tips: string[],
  image: string,
}
