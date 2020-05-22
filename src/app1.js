import "./app1.css";
import $ from "jquery";
const html=`
      <section id="app1">
        <div class="output">
          <span id="number">100</span>
        </div>
        <div class="actions">
          <button id="add1">+1</button>
          <button id="subtract1">-1</button>
          <button id="multiply1">*2</button>
          <button id="divide1">÷2</button>
        </div>
      </section>`

const $element = $(html).appendTo($('body>.page'))

const $button1 = $("#add1");
const $button2 = $("#subtract1");
const $button3 = $("#multiply1");
const $button4 = $("#divide1");
const $number = $("#number");
const n = localStorage.getItem("n");
$number.text(n || 100);
$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n); //存储
  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
