const BTN = document.querySelector("button");
const H1 = document.querySelector("h1");
//예약어는 이름으로 지어줄 수 없음(대문자는 가능하지만 사용하지 않기)

console.log(BTN);

// window.addEventListener("DOMContentLoaded", function () {
//   const BTN = document.querySelector("button");
//   const H1 = document.querySelector("h1");

//   console.log(BTN);
// });

const Toggle = () => H1.classList.toggle("on");
BTN.addEventListener("click", Toggle);

const Kim_Name = "김구라";
const Kim_Age = 20;
const Kim_Wife = "구라찡";

const Kim = {
  name: "김구라",
  age: 20,
  wife: "구라찡",
};

console.log(Kim.name, Kim["name"]);
//객체를 부르는 방법
//대괄호 =  배열 / 중괄호 = 객체(배열은 라벨이 필요x)
//객체는 '이름' /  배열은 '순서' 중요하다!

const Ddal = ["김구라", "엠씨그리"];

console.log(Ddal[0]);

const ShopData = [
  { name: "김구라", age: 20, id: 1 },
  { name: "박구라", age: 21, id: 2 },
  { name: "이구라", age: 22, id: 3 },
  { name: "유구라", age: 23, id: 4 },
];

const overAge = ShopData.filter((it) => it.age > 21);

console.log(overAge);

const SHOP = document.querySelector("#N");
const SHOPDATE = ShopData.map((it) => `<li>${it.name}</li>`).join("");
SHOP.innerHTML = SHOPDATE;
// function Toggle() {
//   H1.classList.toggle("on");
// }

//function으로 만들어진 함수들은 최상단으로 실행됨
