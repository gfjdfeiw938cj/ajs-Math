export default class Character {
  constructor(name) {
    this.name = name;
    this._attack = undefined;
    this._stoned = undefined;
    this.distance = undefined;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    const attack = this._attack * (1 - (this.distance - 1) / 10);
    if (this._stoned) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}
