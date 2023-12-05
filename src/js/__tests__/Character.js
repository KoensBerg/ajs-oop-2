// импортируем все классы проекта
import Character from '../class-Character';
import Bowman from '../class-Bowman';
import Swordsman from '../class-Swordsman';
import Magician from '../class-Magician';
import Daemon from '../class-Daemon';
import Undead from '../class-Undead';
import Zombie from '../class-Zombie';

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если тип имени персонажа != строка, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on wrong type of personage name',
  (Data) => {
    const person = () => new Data(1234);
    const expected = 'Имя персонажа должно иметь тип -строка-';
    expect(person).toThrow(expected);
  },
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если длина имени персонажа > 10 символов, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on too long name of personage',
  (Data) => {
    const person = () => new Data('tooLongNameOfPersonage');
    const expected = 'Имя персонажа должно содержать от 2 до 10 символов';
    expect(person).toThrow(expected);
  },
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если длина имени персонажа < 2 символов, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Daemon],
  [Undead],
  [Zombie],
])(
  'throws on too short name of personage',
  (Data) => {
    const person = () => new Data('L');
    const expected = 'Имя персонажа должно содержать от 2 до 10 символов';
    expect(person).toThrow(expected);
  },
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если тип дочернего класса отличен от разрешённых, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('throws on wrong child class type', () => {
  class NewClass extends Character {
    constructor(name) {
      super(name, 'NewClass', 25, 25);
    }
  }

  const persOlgerd = () => new NewClass('Olgerd');
  const expected = 'Использован несуществующий тип персонажа';

  expect(persOlgerd).toThrow(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если тип дочернего класса разрешён, будет создан новый персонаж
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('shold create new personage of true type', () => {
  const persOlgerd = new Bowman('Olgerd');
  expect(persOlgerd.type).toBe('Bowman');
});
