function isPalindrome(word) { 
    // la palabra la normalizamos sin espacios y en minusculas
    const newWord = word.replaceAll(" ","").toLowerCase();
    // la palabra nueva la revertimos para final la comparamos sean igual
    const reverseWorld = newWord.split("").reverse().join("");
    
    return newWord === reverseWorld;
  }
  
  export function findLargestPalindrome(words) {
    let largePalindrome = null;
    for(const word of words) {
      // Validamos el largo del palidrome actual. Si es nulo es 0.
      let large = ! (largePalindrome) ? 0 : largePalindrome.length;
      
      if(isPalindrome(word) && large < word.length) {
        largePalindrome = word;
      }
    }
    
    return largePalindrome;
  }