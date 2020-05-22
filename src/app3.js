import $ from "jquery";
import "./app3.css";

const $square = $("#app3 .square");
$square.on("click", () => {
  $square.toggleClass("active"); //jQuery 内置的toggleClass根据匹配项的存在或状态参数的值，从匹配元素集中的每个元素中添加或删除一个或多个类    有就加上，没有就删掉
});
