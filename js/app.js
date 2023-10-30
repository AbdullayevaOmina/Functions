// ---------------------------- function:
// ---------------------------- 1 decloration
// function nimadir() {
//   let a = 1;
//   console.log(a + 45);
// }
// nimadir()

// ---------------------------- 2 expression
// let adder = function () {
//   let num1 = 78;
//   let num2 = 2;
//   console.log(num1 * num2);
// };
// adder();

// ---------------------------- 3





// -----------------------------------  return
// function isPositive(num) {
//   // if (num > 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// 	return num > 0
// }
// console.log(isPositive(5));

// ----------------------------------- setTimeout(),  setInterval()
// let i = 0;
// function logger() {
//   i++;
//   console.log("ishga tushdi ", i);
// }
// // setTimeout(logger, 3000)
// setInterval(logger, 1000);

// ----------------------------------- clearInterval();
// let i = 0;
// function logger() {
//   i++;
//   console.log("ishga tushdi ", i);
// }

// let iId = setInterval(logger, 1000);
// setTimeout(() => {
//   clearInterval(iId);
// }, 10_000);

// console.log("tugadi");

// // ----------------------------------- tenglash
// function adder(num1 = 1, num2 = 2) {
//   // num1 ||= 1;
//   // num2 ||= 2;

//   // num1 = num1 || 1;
//   // num2 = num2 || 2;

// 	// if (!num1) {
// 	// 	num1 = 1
// 	// }
// 	// if (!num2) {
//   //   num2 = 2;
//   // }
// 	return num1 + num2
// }

// -------------------------------------- svetafor
// let red = "qizil";
// let yellow = "sariq";
// let green = "yashil";

// function redLight() {
//   console.log(red);
// }
// function yellowLight() {
//   console.log(yellow);
// }
// function greenLight() {
//   console.log(green);
// }

// function tl() {
//   redLight();

//   setTimeout(() => {
//     yellowLight();

//     setTimeout(() => {
//       greenLight();

//       setTimeout(yellowLight(), 5_000);
//     }, 2_000);
//   }, 5_000);
// }

// tl();
// setInterval(tl, 14_000);
