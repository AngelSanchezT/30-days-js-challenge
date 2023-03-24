import assert from 'assert';
import { isLeapYear } from '../isLeapYear';
import { getPetExerciseInfo } from '../petExerciseInfo';
import { printTriangle } from '../printTriangle';


describe('✔ Day 03.1 - Find out if a year is a leap year', () => {
    it('should return a false',() => {
        assert.equal(isLeapYear(2002), false);
    });

    it('should return a true',() => {
        assert.equal(isLeapYear(2000), true);
    });

    it('should return a false for decimals years',() => {
        assert.equal(isLeapYear(1984.25), false);
    });

    it('should return false for negative years', () => {
        assert.equal(isLeapYear(-2024), false);
    });
});

describe('✔ Day 03.2 - Get pet information by type', () => {
    // Dogs

    it('should return a string for dogs',() => {
        assert.equal(typeof getPetExerciseInfo("perro", 3), "string");
    });

    it('should return a correct string for dogs',() => {
        assert.equal(getPetExerciseInfo("perro", 3), "Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
    });

    // Cats
    
    it('should return a string for cats',() => {
        assert.equal(typeof getPetExerciseInfo("gato", 3), "string");
    });

    it('should return a correct string for cats',() => {
        assert.equal(getPetExerciseInfo("gato", 8), "Los gatos viejos necesitan sesiones de juego más cortas");
    });

    // Birds

    it('should return a string for birds',() => {
        assert.equal(typeof getPetExerciseInfo("ave", 7), "string");
    });

    it('should return a correct string for birds',() => {
        assert.equal(getPetExerciseInfo("ave", 7), "Las aves necesitan jugar diariamente y un lugar para volar");
    });

    // Invalid Pets

    it('should return a correct string for invalid pets',() => {
        assert.equal(getPetExerciseInfo("Mamut", 7), "Tipo de mascota inválida");
    });

});

describe('✔ Day 03.3 - Draw a triangule', () => {
    it('should return a triangle of *',() => {
        const size = 5;
        const character = "*";
        const rta = printTriangle(size, character);

        assert.equal(rta, "    *\n   **\n  ***\n ****\n*****");
    });

    it("should return a triangle of size 6 with $", () => {
        const size = 6;
        const character = "$";
        const rta = printTriangle(size, character);

        assert.equal(rta, "     $\n    $$\n   $$$\n  $$$$\n $$$$$\n$$$$$$");
    })

    it("should return a triangle of size 3 with %", () => {
        const size = 3;
        const character = "%";
        const rta = printTriangle(size, character);

        assert.equal(rta, "  %\n %%\n%%%");
    })


});

