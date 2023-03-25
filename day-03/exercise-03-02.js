function getDogInfo(age) { 
    if (age < 1) {
      return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
    } else if (age <= 7) {
      return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
    } else if (age > 7) { 
      return "Los perros viejos necesitan caminatas más cortas";
    }
  }
  
  function getCatInfo(age) {
    if (age < 1) {
      return "Los gatitos necesitan frecuentes sesiones de juego";
    } else if (age <= 7) {
      return "Los gatos a esta edad necesitan jugar diariamente";
    } else if (age > 7) {
      return "Los gatos viejos necesitan sesiones de juego más cortas";
    }
  }
  
  function getBirdInfo(age) {
    if (age < 1) {
      return "Las aves jóvenes necesitan mucho espacio para volar";
    } else if (age <= 7) {
      return "Las aves necesitan jugar diariamente y un lugar para volar";
    } else if (age > 7) {
      return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
    }
  }
  
  export function getPetExerciseInfo(type, age) {
    // Tu Código aquí 👈
    let _type = type.toLowerCase();
  
    switch (_type) { 
      case "perro":
        return getDogInfo(age);
      case "gato":
        return getCatInfo(age);
      case "ave":
        return getBirdInfo(age);
      default:
        return "Tipo de mascota inválida";

    }
  
  }