let str = "Привет";

str.test = 5; // (*)

alert(str.test);

// Без "use strict" -  undefined
// С "use strict" - Ошибка 