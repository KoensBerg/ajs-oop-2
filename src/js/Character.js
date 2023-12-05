export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Имя персонажа должно иметь тип -строка-');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('Использован несуществующий тип персонажа');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  // метод повышает уровень игрока
  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел персонажа, ибо он мёртв');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    }
  }

  // метод вычисляет урон, наносимый персонажу
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
