import $ from "jquery";
import "./app3.css";
const html=`
 <section id="app3">
        <div class="square">123</div>
      </section>`

const $element=$(html).appendTo($('body>.page'))

const $square = $("#app3 .square");
const localKey = "app3.active";
const active = localStorage.getItem(localKey) === "yes";
// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// }
$square.toggleClass("active", active);
$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem("app3.active", "no");
  } else {
    $square.addClass("active");
    localStorage.setItem("app3.active", "yes");
  }
  // $square.toggleClass("active"); //jQuery 内置的toggleClass根据匹配项的存在或状态参数的值，从匹配元素集中的每个元素中添加或删除一个或多个类    有就加上，没有就删掉
});
