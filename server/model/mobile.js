const faker = require("faker");
const _ = require("lodash");

const MAX_MOBILE = 100;

const IMAGE_URL = [
  "https://www.searchpng.com/wp-content/uploads/2019/02/HUAWEI-P20-715x856.png",
  "https://www.pngonly.com/wp-content/uploads/2017/05/Samsung-Mobile-Phone-S5-PNG-Image.png",
  "https://purepng.com/public/uploads/large/purepng.com-samsung-phonesmartphoneandroidgooglephoneapplication-211519339028ghq1u.png",
  "https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png",
  "https://www.searchpng.com/wp-content/uploads/2018/12/oneplus-6-leak-amazon-de-4.png",
  "https://download.appmifile.com/5_updatepdf_in/28/02/2019/b7c1a94f-78d8-47ca-a3aa-d6c417b62d6e.png",
  "https://images.ctfassets.net/wcfotm6rrl7u/5bjwfDGgZGuYoy6EyWSmMy/2c4edaa78f1ab9aac0e0fe5e6a2c8af0/Nokia-3310-Hero.png?fm=png",
];

const mobileName = ["Samsung", "Xiaomi", "Nokia", "Oneplus"];
const mobileType = ["Note 8 Pro", "Note 8", "M30s", "Nova"];
const mobileRam = ["4GM RAM", "6GM RAM", "8GM RAM", "16GM RAM"];
const mobleDisplay = [
  "Full HD, AMOLED",
  "Ultra HD AMOLED",
  "HD AMOLED",
  "1024 X 1800",
];

const Mobile = _.times(MAX_MOBILE, buildMobile);

function buildMobile() {
  return {
    id: faker.random.uuid(),
    name: buildMobileName(),
    date: faker.date.past(),
    price: faker.commerce.price(),
    inStock: faker.random.boolean(),
    image: IMAGE_URL[Math.floor(Math.random() * 6)],
  };
}

function buildMobileName() {
  return `${mobileName[random()]} ${mobileType[random()]} ${
    mobileRam[random()]
  } ${mobleDisplay[random()]}`;
}

function random() {
  return [Math.floor(Math.random() * 3)];
}

module.exports = Mobile;
