let login = prompt("Введите логин", "");

if (login === "Админ") {
  
  let password = prompt("Введите пароль", "");
  
  if (password === "Я главный") {
    alert("Здравствуйте")
  } else {
    alert("Неверный пароль")
  }
} else if (!login) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}