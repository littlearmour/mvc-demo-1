import "./app2.css";
import $ from "jquery";
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget); //e.target用户点击的元素 e.currentTarget   jquery封装，操作
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index(); //jquery元素.index(),排行第几
  $tabContent
    .children()
    // .eq(index) //eq等于
    // .css({ display: "block" })
    // .siblings()
    // .css({ display: "none" });
    // .eq(index)
    // .show()
    // .siblings()
    // .hide();//不能用show,hide,css
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active"); //样式与行为分离
});
$tabBar.children().eq(0).trigger("click"); //trigger自动触发
