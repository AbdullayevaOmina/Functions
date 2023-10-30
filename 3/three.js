alert(
  "Salom! 👋\nMen 1 dan 10 gacha son o'ylayapman.\nSizning vazifangiz men o'ylagan sonni topish. \nSizda 5 ta urinish mavjud"
);

function rand() {
  num = prompt("Son kiriting: ");
  return num == Math.floor(Math.random() * 10 + 1);
}

for (let i = 1; i < 6; i++) {
  if (rand()) {
    alert("Qoyil topdingiz! 👏");
    break;
  } else {
    if (i == 5) {
      alert("Afsus siz biror marta ham topolmadingiz.");
      break;
    } else {
			alert("Afsus topolamdingiz. Sizda yana " + (5 - i) + " ta urinish qoldi.");
		}
  }
}
