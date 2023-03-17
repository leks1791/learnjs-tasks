function sum(a) {

    return function(b) {
      return a + b; // переменная a из внешнего лексического окружения
    };
  
  }
  
  console.log( sum(1)(2) ); 
  console.log( sum(5)(-1) ); 