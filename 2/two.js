function BMI(height, weight) {
  let temp = weight / ((height * height) / 10000);
  if (temp < 18.5) {
    return "🟠 Thin 🟠";
  } else if (temp >= 18.5 && temp <= 24.9) {
    return "🔵 Normal 🔵";
  } else if (temp >= 25 && temp <= 29.9) {
    return "🟢 Overweight 🟢";
  } else if (temp >= 30 && temp <= 39.9) {
    return "🟡 Obese 🟡";
  } else if (temp >= 40) {
    return "🔴 Morbidly Obese 🔴";
  }
  // return temp
}

// console.log(BMI(160, 50));

alert(
  BMI(prompt("Bo'yingiz uzunligini kiriting:"), prompt("Vazningizni kiriting:"))
);