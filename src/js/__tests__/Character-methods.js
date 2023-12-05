import Bowman from '../Bowman';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если здоровье персонажа = 0, метод levelUp() выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('throws on levelUp() if health === 0', () => {
  const persOlgerd = new Bowman('Olgerd');
  persOlgerd.health = 0;

  const received = () => persOlgerd.levelUp();
  const expected = 'Нельзя повысить левел персонажа, ибо он мёртв';

  expect(received).toThrow(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Метод levelUp() повысит уровни level, attack и defence персонажа
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should levelUp() to increase the level, attack & defence', () => {
  const persOlgerd = new Bowman('Olgerd');

  persOlgerd.health = 20;
  persOlgerd.level = 2;
  persOlgerd.attack = 10;
  persOlgerd.defence = 10;

  persOlgerd.levelUp();
  // level = 2 + 1, attack = 10 * 1.2, defence = 10 * 1.2

  const received = [persOlgerd.level, persOlgerd.attack, persOlgerd.defence];
  const expected = [3, 12, 12];

  expect(received).toEqual(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Метод damage(points) снизит уровень здоровья персонажа
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should levelUp() to lower health', () => {
  const persOlgerd = new Bowman('Olgerd');

  persOlgerd.health = 20;
  persOlgerd.defence = 30;

  persOlgerd.damage(5);
  // health -= points * (1 - defence / 100);
  // health = 20 - 5 * (1 - 30 / 100) = 16.5

  const received = persOlgerd.health;
  const expected = 16.5;

  expect(received).toBe(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// Метод damage(points) снизит уровень здоровья до 0
// - - - - - - - - - - - - - - - - - - - - - - - - - -
test('throws on levelUp() if health === 0', () => {
  const persOlgerd = new Bowman('Olgerd');

  persOlgerd.health = 10;
  persOlgerd.defence = 5;

  persOlgerd.damage(20);
  // health -= points * (1 - defence / 100);
  // health = 10 - 20 * (1 - 5 / 100) = -9

  const received = persOlgerd.health;
  const expected = 0;

  expect(received).toBe(expected);
});
