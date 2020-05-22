import "./app2.css";
import $ from "jquery";
const html=`
       <section id="app2">
        <ol class="tab-bar">
          <li><span>1</span></li>
          <li><span>2</span></li>
        </ol>
        <ol class="tab-content">
          <li>内容1</li>
          <li>内容2</li>
        </ol>
      </section>`

const $element=$(html).appendTo($('body>.page'))

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const localKey='app2.index'
const index=localStorage.getItem(localKey) || 0//||0用来做保底值
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget); //e.target用户点击的元素 e.currentTarget   jquery封装，操作
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index(); //jquery元素.index(),排行第几
  localStorage.setItem('app2.index',index)
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
$tabBar.children().eq(index).trigger("click"); //trigger自动触发
