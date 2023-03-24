export function printTriangle(size, character) {
    // Tu código aquí 👈
    let triangle = "";
    for (let i = 1; i <= size; i++) {
      
      let spaces = " ".repeat(size - i);
      let characters = character.repeat(i);
      triangle += spaces + characters;
      if (i < size) { 
        triangle += "\n";
      }
    }
  
    console.log(triangle);
    return triangle;
  }