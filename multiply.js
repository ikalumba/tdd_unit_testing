export function multiply(a, b) {
   // return a*b;
   
      let result = 0;
      let absB = Math.abs(b); // handling negative numbers by taking absolute value
      
      for (let i = 0; i < absB; i++) {
          result += a;
      }
      
      // handling negative result if one of the numbers is negative
      if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
          result = -result;
      }
      
      return result;
  }
