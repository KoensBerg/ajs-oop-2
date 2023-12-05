// импортируем все классы проекта
import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Проверяем значения attack и defence в дочерних классах
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [Bowman, [25, 25]],
  [Swordsman, [40, 10]],
  [Magician, [10, 40]],
  [Daemon, [10, 40]],
  [Undead, [25, 25]],
  [Zombie, [40, 10]],
])(
  'should get the correct values of attack & defence',
  (Data, expected) => {
    const persOlgerd = new Data('Olgerd');
    const received = [persOlgerd.attack, persOlgerd.defence];

    expect(received).toEqual(expected);
  },
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если тип дочернего класса отличен от разрешённых, выбросит ошибку
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('throws on wrong child class type', () => {
  class NewClass extends Character {
    constructor(name) {
      super(name, 'NewClass');
      this.attack = 25;
      this.defence = 25;
    }
  }

  const persOlgerd = () => new NewClass('Olgerd');
  const expected = 'Использован несуществующий тип персонажа';

  expect(persOlgerd).toThrow(expected);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Если тип дочернего класса разрешён, будет создан новый персонаж
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test.each([
  [Bowman, 'Bowman'],
  [Swordsman, 'Swordsman'],
  [Magician, 'Magician'],
  [Daemon, 'Daemon'],
  [Undead, 'Undead'],
  [Zombie, 'Zombie'],
])(
  'shold create new personage of true type',
  (Data, expected) => {
    const persOlgerd = new Data('Olgerd');
    const received = persOlgerd.type;

    expect(received).toBe(expected);
  },
);
