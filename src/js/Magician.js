import Character from './app';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.stoned = false;
  }
}
