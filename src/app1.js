import "./app1.css";
import $ from "jquery";

const eventBus = $(window);
// console.log(eventBus.on);
// console.log(eventBus.trigger);
//数据相关放到m
const m = {
  // 初始化数据
  data: {
    n: parseInt(localStorage.getItem("n")),
  },
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data); //data的所有属性赋值给update
    eventBus.trigger("m:updated");
    localStorage.setItem('n', m.data.n);
  },
  get() {},
};
//视图相关放到v
const v = {
  el: null,
  //第一次渲染html
  html: `
      <div>
        <div class="output">
          <span id="number">{{n}}</span>
        </div>
        <div class="actions">
          <button id="add1">+1</button>
          <button id="subtract1">-1</button>
          <button id="multiply1">*2</button>
          <button id="divide1">÷2</button>
        </div>
      </div>`,
  init(container) {
    v.el = $(container);
    v.render();
  },
  render(n) {
    if (v.el.children.length !== 0) v.el.empty();
    $(v.html.replace("{{n}}", n)).appendTo(v.el);
  },
};
// 其他为c
const c = {
  init(container) {
    v.init(container);
    v.render(m.data.n); //view=render(data)  视图等于渲染数据
    //寻找重要的元素
    c.autoBindEvents();
    eventBus.on("m:updated", () => {
      v.render(m.data.n);
    });
  },
  events: {
    "click #add1": "add",
    "click #subtract1": "subtract",
    "click #multiply1": "multiply",
    "click #divide1": "divide",
  },
  add() {
    m.update({ n: m.data.n + 1 });
  },
  subtract() {
    console.log("here");
    m.update({ n: m.data.n - 1 });
  },
  multiply() {
    console.log("here");
    m.update({ n: m.data.n * 2 });
  },
  divide() {
    m.update({ n: m.data.n / 2 });
  },

  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      const spaceIndex = key.indexOf(" ");
      const part1 = key.slice(0, spaceIndex);
      const part2 = key.slice(spaceIndex + 1);
      v.el.on(part1, part2, value);
    }
  },
};
export default c;
