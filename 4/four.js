//  4) translate function => input english => ru (ruschada), uz (o'zbecha)
let dict = {
  apple: {
    uz: "Olma",
    ru: "яблоко",
  },
  orange: {
    uz: "apelsin",
    ru: "апельсин",
  },
  watermelon: {
    uz: "Tarvuz",
    ru: "арбуз",
  },
  melon: {
    uz: "qovun",
    ru: "дыня",
  },
  avocado: {
    uz: "avakado",
    ru: "авокадо",
  },
  grapes: {
    uz: "uzum",
    ru: "виноград",
  },
  plum: {
    uz: "olho'ri",
    ru: "слива",
  },
  banana: {
    uz: "banan",
    ru: "банан",
  },
  pear: {
    uz: "nok",
    ru: "груша",
  },
  persimmon: {
    uz: "xurmo",
    ru: "Хурма",
  },
  cherry: {
    uz: "olcha",
    ru: "вишня",
  },
  apricot: {
    uz: "o'rik",
    ru: "абрикос",
  },
};

function translator(word, lang) {
  if (dict[word] && dict[word][lang]) {
    return dict[word][lang];
  } else {
    return "Uzur, hozirda lug'atimizda bu meva nomi mavjud emas.";
  }
}

let inputWord = prompt("Ingliz tilida biron meva nomi kiriting:").toLowerCase();
let inputLang = prompt("Qaysi tilga tarjima qilinsin?").toLowerCase();
let translation = translator(inputWord, inputLang);
alert(translation);