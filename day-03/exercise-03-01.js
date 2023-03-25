function isDivisible(base, factor) {
    return (base % factor) === 0;
  }
  export function isLeapYear(year) {
    if (year < 0) { 
      return false;
    }
  
    // Es divisible por 4, pero no por 100.
    if (isDivisible(year, 4) && !isDivisible(year, 100)) { 
      return true;
    }
  
    // Es divisible por 100 y por 400.
    if (isDivisible(year, 100) && isDivisible(year, 400)) { 
      return true;
    }
  
    // no es bisiesto
    return false;
    
  }