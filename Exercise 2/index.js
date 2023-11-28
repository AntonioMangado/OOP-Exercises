class Warrior{
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    defend(damage) {
        if ((this.life - damage) < 0) {
            console.log(`The ${this.constructor.name} received ${damage} points of damage. Remaining HP is 0. The ${this.constructor.name} fainted.`)
            this.life = this.life - damage
        } else {
        console.log(`The ${this.constructor.name} received ${damage} points of damage. Remaining HP is ${this.life - damage}`);
        this.life = this.life - damage;
    }
    }
}

class Maya extends Warrior {
    constructor(life, power) {
      super(life, power); // Llama al constructor del padre y le pasa su parámetro
    }
    drinkColaCao() {
        console.log(`Maya's attack rose sharply! ATK: ${this.power + 10}`);
        this.power = this.power + 10;
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
      super(life, power); // Llama al constructor del padre y le pasa su parámetro
    }
    drinkNesquik() {
        console.log(`Aztec's HP rose sharply! HP: ${this.life + 10}`);
        this.life = this.life + 10
    }
}

let MayanWarrior = new Maya(50, 12);
let AztecWarrior = new Aztec(60, 10);


const initialBattle = () => {
    AztecWarrior.drinkNesquik();
    MayanWarrior.drinkColaCao()
    AztecWarrior.defend(MayanWarrior.power)
    MayanWarrior.defend(AztecWarrior.power)
}

const battle = () => {
    AztecWarrior.defend(MayanWarrior.power)
    MayanWarrior.defend(AztecWarrior.power)
}

const fight = () => {
    // Batalla inicial con bufos
    initialBattle();
    console.log("Both warriors are still standing. The fight continues!")
    // Luego, batalla sin bufos hasta que la vida de alguien llegue a 0
    while (MayanWarrior.life > 0 && AztecWarrior.life > 0) {
        battle()
        if (MayanWarrior.life < 1) {
                console.log("The Aztec wins!")
                break
            } else if (AztecWarrior.life < 1) {
                console.log("The Mayan wins!")
                break
            } else {
                console.log("Both warriors are still standing. The fight continues!")
            }
         
}}

fight();
