import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician test', () => {
  const magician = new Magician('Fred');

  test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 1, false, 100],
    [100, 2, false, 90],
  ])('Супер тест', (attack, distance, stoned, expected) => {
    magician.attack = attack;
    magician.distance = distance;
    magician.stoned = stoned;
    expect(magician.attack).toBe(expected);
  });

  test('Magician get/set stoned', () => {
    magician.stoned = false;
    expect(magician.stoned).toBeFalsy();
  });
});

describe('Daemon test', () => {
  let daemon;
  beforeEach(() => {
    daemon = new Daemon('Fred');
    daemon.attack = 100;
    daemon.distance = 2;
  });

  test('Daemon stoned', () => {
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });

  test('Daemon no stoned', () => {
    daemon.stoned = false;
    expect(daemon.attack).toBe(90);
  });

  test('Daemon get/set stoned', () => {
    daemon.stoned = false;
    expect(daemon.stoned).toBeFalsy();
  });
});
