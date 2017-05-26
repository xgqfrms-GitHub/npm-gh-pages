// 赠豆 
orderGift += `
    <div class="order-gift cut-line">
        <div class="title">
            <span class="gf-lf">赠豆</span>
            <span class="gf-rt">${parseFloat(dadouoff).toFixed(2)}</span>
        </div>
        ${
            totalReduceMoney
             ? 
             `
             <div class="title">
                <span class="gf-lf">满减</span>
                <span class="gf-rt">${parseFloat(totalReduceMoney).toFixed(2)}</span>
            </div>
            `
            : 
            ``
        } 
        <div class="money">
            <span class="gf-lf">订单金额</span>
            <span class="gf-rt">${parseFloat(sum).toFixed(2)}</span>
        </div>
    </div>
`;


printFoot = `
    <div class="bd-extra">
        <div class="total">
            <span>商品总金额：</span>
            <span class="tt-money"> ${total}</span>
            <span>-赠豆：${dadouoff}</span>
            ${
                totalReduceMoney ? `<span>-满减：${totalReduceMoney} </span> : ''`
            }
            <span>-赠豆：${dadouoff}</span>
            <span class="gift"></span>
        </div>
        <div class="payed">
            <span>支付金额：${sum}</span>
        </div>
    </div>
`;





## es6 destructuring

```js

let datas =  {
    storeName, 
    id, 
    name, 
    phoneNum, 
    address, 
    storeGoodsOrderDetailsVOList, 
    activityGoodsVOList, 
    dadouoff, 
    redPacket,
    totalReduceMoney, 
    sum, 
    createdAt
};

let {
    storeName, 
    id, 
    name, 
    phoneNum, 
    address, 
    storeGoodsOrderDetailsVOList, 
    activityGoodsVOList, 
    dadouoff, 
    redPacket,
    totalReduceMoney, 
    sum, 
    createdAt
} = json;


json = {datas};

// es6 destructuring


let jsonx = {
    aaa: 1, 
    bbb: 2, 
    ccc: 3, 
    ddd: 4, 
    xxx: "x"
};

let {
    aaa, 
    bbb,
    ccc,
    xxx
} = jsonx;



aaa;
//1

bbb;
//2

ccc;
//3

ddd;
// Uncaught ReferenceError: ddd is not defined

xxx;
// Uncaught ReferenceError: xxx is not defined



```





## `JS Advanced Demo` & `with`

```js

let greeting = `My name is ${name}, age ${age}, I am a ${job.jobName}`;

let employee = {
    name: 'xgqfrms',
    age: 23,
    job: {
        jobName: 'Fullstack Web Developer',
        jobLevel: 'Senior'
    }
};

let result = greeting.render(employee);

console.log(result);

// My name is xgqfrms, age 23, I am a Fullstack Web Developer.



String.prototype.render = function(ctx) {
    with(ctx) {
        return eval('`' + this + '`')
    }
}

```

## `with` 的本意是减少键盘输入。

```js
obj.a = obj.b;
obj.c = obj.d;
```

可以简写成

```js

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    keyx: "valuex"
};
　　
with(obj) {
    a = key1;　　　　
    b = key2;
    c = keyx;
}

```

但是，在实际运行时，解释器会首先判断 `obj.b` 和`obj.d` 是否存在，如果不存在的话，再判断全局变量b和d是否存在。
这样就导致了低效率，而且可能会导致意外，因此最好不要使用 `with` 语句。

```js

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    keyx: "valuex"
};


let {
    key1,
    key2,
    keyx
} = obj;


key1;
// "value1"

key2;
// "value2"

keyx;
// "valuex"

let {
    x,
    y,
    z
} = obj;

x;
// undefined

y;
// undefined

z;
// undefined

```

/*
解构赋值的缺点：

1. keys可能会污染全局空间(在函数外结构)

2. key 名字必须与要解构的对象中的 key名字保持一致！

with(): key 名字可以自定义！
升级版 destructuring

*/

```js 

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    keyx: "valuex"
};


with(obj) {
    a = key1;　　　　
    b = key2;
    c = keyx;
};


a
// "value1"

b
// "value2"

c
// "valuex"

window.a
// "value1"

window.b
// "value2"

window.c
// "valuex"


function xWith() {
    let obj = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        keyx: "valuex"
    };
    with(obj) {
        a = key1;　　　　
        b = key2;
        c = keyx;
    };
}



```






// https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror

## 函数参数：

message：错误信息（字符串）。
// Available as event (sic!) in HTML onerror="" handler.
// 在HTML onerror =“”处理程序中可用作事件（sic！）。
source：发生错误的脚本URL（字符串）
lineno：发生错误的行号（数字）
colno：发生错误的列号（数字）
error：Error对象（对象）



window.onerror = function(message, source, lineno, colno, error) {
    let x_style = `
        color: #0f0;
        background: rgba(0,0,0,0.5);
        font-size: 2rem;
        border: 1px solid red;
        border-radius: 7px;
    `;
    console.log(`%c message \n`, `${x_style}`, message);
    console.log(`%c source \n`, `${x_style}`, source);
    console.log(`%c lineno \n`, `${x_style}`, lineno);
    console.log(`%c colno \n`, `${x_style}`, colno);
    console.log(`%c error \n`, `${x_style}`, error);
}






const x_onerror = (message, source, lineno, colno, error) => {
    let x_error_obj = {};
    x_error_obj.message = message;
    x_error_obj.source = source;
    x_error_obj.lineno = lineno;
    x_error_obj.colno = colno;
    x_error_obj.error = error;

    let x_style = `
        color: #0f0;
        background: rgba(0,0,0,0.5);
        font-size: 2rem;
        border: 1px solid red;
        border-radius: 7px;
    `;
    console.log(`%c message \n`, `${x_style}`, message);
    console.log(`%c source \n`, `${x_style}`, source);
    console.log(`%c lineno \n`, `${x_style}`, lineno);
    console.log(`%c colno \n`, `${x_style}`, colno);
    console.log(`%c error \n`, `${x_style}`, error);
    return x_error_obj;
};


window.onerror = x_onerror();



fetch('http://localhost:3000/tasks/1', {
    method: 'get'
}).then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(ex) {
    console.log('parsing failed: ', ex)
});


fetch('https://cdn.xgqfrms.xyz/json/cats.json', {
    method: 'get'
}).then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(ex) {
    console.log('parsing failed: ', ex)
});







# css comments & sass(.scss) comments



https://css-tricks.com/snippets/css/comments-in-css/
https://www.sitepoint.com/how-good-are-your-html-and-css-comments/


https://www.w3schools.com/css/css_syntax.asp
https://www.sitepoint.com/web-foundations/css-comments/

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments

http://sass.js.org/



#  解构赋值

> 解构赋值 语法是一个Javascript表达式，这使得可以将值从数组或属性从对象提取到不同的变量中。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



https://stackoverflow.com/questions/9267289/what-does-function-in-javascript-mean


let x_style = `
    color: #0f0;
    background: rgba(0,0,0,0.5);
    font-size: 2rem;
    border: 1px solid red;
    border-radius: 7px;
`;

let message = `IIFE`;

(function(){
    console.log(`%c message \n`, `${x_style}`, `${message} outer`);
})();

(function(){
    console.log(`%c message \n`, `${x_style}`, `${message} inner`);
}());



!function(){
    console.log(`%c message \n`, `${x_style}`, `${message} !`);
}();


You can also use + instead of !.

+function(){
    console.log(`%c message \n`, `${x_style}`, `${message} +`);
}();


-function(){
    console.log(`%c message \n`, `${x_style}`, `${message} -`);
}();



闭包

闭包-返回-返回


function()(){}.png


let x_style = `
    color: #0f0;
    background: rgba(0,0,0,0.5);
    font-size: 2rem;
    border: 1px solid red;
    border-radius: 7px;
`;

function makeAdder(x, y) {
    console.log(`%c X \n`, `${x_style}`, `${x}`);
    console.log(`%c Y \n`, `${x_style}`, `${y}`);
    return function() {
        console.log(`%c X inner \n`, `${x_style}`, `${x}`);
        console.log(`%c Y inner \n`, `${x_style}`, `${y}`);
        return x + y;
    };
}

makeAdder(1,2);
// ƒ (){...}
// 
makeAdder(1,2)();
// 3


function makeAdder(x, y) {
    console.log(`%c X \n`, `${x_style}`, `${x}`);
    console.log(`%c Y \n`, `${x_style}`, `${y}`);
    return function(x, y) {
        console.log(`%c X inner \n`, `${x_style}`, `${x}`);
        console.log(`%c Y inner \n`, `${x_style}`, `${y}`);
        return x + y;
    };
}

makeAdder(1,2)();
// NaN
makeAdder()(1,2);
// 3
makeAdder(1,2)(1,2);
// 3



function makeAdder(x) {
    console.log(`%c X \n`, `${x_style}`, `${x}`);
    return function(y) {
        console.log(`%c Y \n`, `${x_style}`, `${y}`);
        return x + y;
    };
}

makeAdder();

ƒ(y) {
    return x + y;
}

makeAdder(1);

makeAdder(2);


makeAdder(1)(2);
// 3







function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    }
}


makeSizer(14);

ƒ () {
    document.body.style.fontSize = size + 'px';
}

makeSizer(14)();

makeSizer(33)();


https://davidwalsh.name/event-delegate

JavaScript世界中最热门的方法之一就是事件委托，有很大的理由。

事件委托允许您避免向特定节点添加事件侦听器; 而是将事件侦听器添加到一个父项。


该事件侦听器分析冒泡事件以查找子元素的匹配。

基本概念很简单，但是很多人不了解事件代理如何工作。

让我来解释一下事件代理如何工作，并提供基本事件委托的纯JavaScript示例。


假设我们有一个父级UL元素，其中包含几个子元素：


```html 

<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
    <li id="post-3">Item 3</li>
    <li id="post-4">Item 4</li>
    <li id="post-5">Item 5</li>
    <li id="post-6">Item 6</li>
</ul>

```

我们还说，当每个子元素被点击时，需要发生一些事情。


您可以为每个单独的LI元素添加单独的事件侦听器，但是如果LI元素经常从列表中添加和删除，该怎么办？

添加和删​​除事件监听器将是一场噩梦，特别是如果添加和删除代码位于应用程序的不同位置。

更好的解决方案是将事件监听器添加到父UL元素。

但是，如果您将事件监听器添加到父级，那么您将如何知道哪个元素被点击？


简单：当事件冒泡到UL元素时，您检查事件对象的目标属性以获得对实际点击的节点的引用。

以下是一个非常基本的JavaScript代码段，它说明了事件委托：


// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
});

首先将单击事件侦听器添加到父元素。
当事件侦听器被触发时，检查事件元素以确保它是要作出反应的元素的类型。

如果是LI元素，繁荣/轰：我们有我们需要的！ 如果它不是我们想要的元素，则可以忽略该事件。


这个例子很简单 - UL和LI是一个直接的比较。让我们尝试更难的事情。


让我们有一个父母DIV与许多孩子，但我们关心的是一个A类标签与classA CSS类：

// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
    // e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
    }
});

使用Element.matches API，我们可以看到元素是否符合我们所需的目标。

https://davidwalsh.name/element-matches-selector

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches

由于大多数开发人员使用JavaScript库进行DOM元素和事件处理，因此我建议使用库的事件委托方法，因为它们具有高级委派和元素标识功能。


希望这可以帮助您直观地看到事件委托背后的概念，并说服您的授权！



Array.indexOf的可用性独立于任何一种方法或nodeList，它取决于您正在使用的浏览器及其实现的JavaScript版本


var re = new RegExp('\\b'+class+'\\b');
re.test(e.target.className);


e.target.className.split(" ").indexOf(class) !=-1



$("#myDiv").on("click", "a.classA", function(e){

});



http://www.codereadability.com/javascript-default-parameters-with-or-operator/


function eatFruit (fruit) {
    fruit = fruit || "strawberry";
    // ...
}


function eatFruit ((fruit = fruit || "strawberry")) {
    // ...
}



function eatFruit (fruit = "strawberry") {
    // ...
}



// If the default value is 2 and you pass in 0 the function will use 2 instead of the value you passed in.




function numTest (num) {
    num = num || 3;
    console.log(num);
    // ...
}


const numTest = (num = 3) => {
    console.log(num);
    // ...
}



function numTest (num) {
    num = num || 3;
    console.log(num);
    // ...
}

numTest(0); // it shoul be 0
// 3

const numTestNew = (num = 3) => {
    console.log(num);
    // ...
};

numTestNew(0);
// 0


numTestNew(undefined);
// 3

numTest(undefined);
// 3

numTest("");
// 3

numTestNew("");
// 



https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015&targets=&browsers=&builtIns=false&debug=false&code=const%20numTestNew%20%3D%20(num%20%3D%203)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(num)%3B%0D%0A%20%20%20%20%2F%2F%20...%0D%0A%7D%3B%0D%0A&experimental=false&loose=false&spec=false&playground=true


"use strict";

var numTestNew = function numTestNew() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    console.log(num);
    // ...
};




"use strict";

function numTest(num) {
    num = num || 3;
    console.log(num);
    // ...
}







const numTestNew = (num = 3) => {
    console.log(num);
    // ...
};

numTestNew("");
//

numTestNew(undefined);
// 3

numTestNew();
// 3

numTestNew(NaN);
// NaN

numTestNew(null);
// null

numTestNew(0);
// 0

numTestNew({});
// {}

numTestNew([]);
// []






C:\Users\ctc-lidan\Documents\My Kindle Content




<button id="btn" onclick="ShowBtn();">Hello World!</button>




function showBtn(){
    var btn1 = document.getElementById('btn').textContent;
    var btn2 = document.getElementById('btn').innerText;
    var btn3 = document.getElementById('btn').innerHTML;
    console.log(`%c btn.textContent`, `color: red;`,  btn1);
    console.log(`%c btn.innerText`, `color: green;`,  btn2);
    console.log(`%c btn.innerHTML`, `color: blue;`,  btn3);
}



// 闭包-经典的面试题


for(var i = 0; i < 6; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 0)
}


for(var i = 0; i < 6; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i); 
        }, 0)
    })(i)
}



// http://wesbos.com/destructuring-default-values/

// Combining with Destructuring Renaming

const person = {
    first: 'Wes',
    last: 'Bos',
};

const {
    first: firstName
} = person;

console.log(firstName); 
// Wes





const person = {
    first: 'Wes',
    last: 'Bos'
};

const {
    middle: middleName = 'Super Rad'
} = person;

console.log(middleName); 
// 'Super Rad'







num = document.querySelector('[data-good="saleNumber"]');



document.querySelector('[data-good="saleNumber"]').value;


const numX9 = (param) => {
    input_param =  `[data-good="${param}"]`;
    num = document.querySelector(input_param);
    num.value;
    num.textContent;
    num.innerText;
    num.innerHTML;
    console.log(`%c num`, `color: red`, num);
    console.log(`%c num.value`, `color: red`, num.value);
    console.log(`%c textContent`, `color: red`, num.textContent);
    console.log(`%c num.innerText`, `color: red`, num.innerText);
    console.log(`%c num.innerHTML`, `color: red`, num.innerHTML);
}




const setNumX9 = (id) => {
    let input_param =  `#${id}`,
        num = document.querySelector(input_param);
    console.log(`%c num`, `color: red`, num);
    console.log(`%c num.value`, `color: red`, num.value);
    console.log(`%c textContent`, `color: red`, num.textContent);
    console.log(`%c num.innerText`, `color: red`, num.innerText);
    console.log(`%c num.innerHTML`, `color: red`, num.innerHTML);
    let showValue = num.value + '\n' + num.textContent + '\n' + num.innerText + '\n' + num.innerHTML;
    alert(showValue);
}



// input-type=number-value(querrySelectorAll Array)


// https://www.w3schools.com/jsref/prop_number_value.asp


datas = document.querySelectorAll('[data-good="saleNumber"]');
// (3) [input.params-d, input.params-d, span]



datas[1].value;
// "9999999999999"


jsdoc decreat 
// 




const datas = document.querySelectorAll('[data-good="saleNumber"]');

datas[1].value;

datas[1].value.length;

typeof(datas[1].value);

datas[1].value.length > 5 ? datas[1].value = parseInt(99999) : datas[1].value = parseInt(datas[1].value);




# Destructuring Renaming

> http://wesbos.com/destructuring-default-values/


const person = {
    first: 'Wes',
    last: 'Bos',
};

const {
    first: firstName
} = person;

first;
// Uncaught ReferenceError: first is not defined

firstName;
// "Wes"




const person = {
    first: 'Wes',
    last: 'Bos',
};

const {
    middle: middleName = 'Super Rad'
} = person;

console.log(middleName); 
// 'Super Rad'




解决 json invalid data 问题！


## old way

datatable.ajax(data.json);



// chrome-console.log() XHR & Fetch API




## new way

datatable.ajax( data.json = default.json);


// default.json
const {
    default.json.key1 = default.json.value1,
    default.json.key2 = default.json.value2,
    default.json.key3 = default.json.value3
} = data.json;


const data = {
    json: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    },
    json1: {
        'key1': 'value1',
        'key2': 'value2',
        'key3': 'value3'
    },
    json2: {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    },
    jsonError: {
        "key1": undefined,
        "key2": null,
        "key3": 0,
        "key4": false,
        "key5": NaN
    }
}


const Xdefault = {
    json: {
        'Dkey1': 'Dvalue1',
        'Dkey2': 'Dvalue2',
        'Dkey3': 'Dvalue3',
        'Dkey4': 'Dvalue4',
        'Dkey5': 'Dvalue5'
    }
}



const {
    key1: newKey1 = Xdefault.json.Dkey1,
    key2: newKey2 = Xdefault.json.Dkey2,
    key3: newKey3 = Xdefault.json.Dkey3
} = data.json;


const {
    key1: newKey1 = Xdefault.json.Dkey1,
    key2: newKey2 = Xdefault.json.Dkey2,
    key3: newKey3 = Xdefault.json.Dkey3
} = data.jsonError;

newKey1;
// "Dvalue1"
newKey2;
// null
newKey3;
// 0




const {
    key1: newKey1x = Xdefault.json.Dkey1,
    key2: newKey2x = Xdefault.json.Dkey2,
    key3: newKey3x = Xdefault.json.Dkey3,
    key4: newKey4x = Xdefault.json.Dkey4,
    key5: newKey5x = Xdefault.json.Dkey5
} = data.json;



newKey1x;
// "value1"
newKey2x;
// "value2"
newKey3x;
// "value3"
newKey4x;
// "Dvalue4"
newKey5x;
// "Dvalue5"





# ES6 arrow-functions in deepth 


https://wesbos.com/arrow-functions/



const implicit = (a) => {
    a = a + 1;
    return a;
}


const implicitX = x => x = x + 1;


const implicit = (a) => {
    a = a + 1;
    let b = a * a;
    return b;
}



const implicitY = y => y = (y + 1) * (y + 1);

implicitY(2);
// 9

/* 当删除大括号时，它将是一个隐式的返回值，这意味着我们不需要指定我们返回*/




const implicitA = y => {y = (y + 1) * (y + 1);};

implicitA(2);
// undefined

/* 当有大括号时，我们需要指定返回一个显示的返回，*/




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#


// 如果箭头函数 有多个参数, 必须使用 ()圆括号:

const multi_params = (a, b) => {
    let sum = a + b;
    console.log(sum);
};


multi_params(1, 2);
// 3



// 如果箭头函数 无参数, 必须使用 ()圆括号或者 _下划线:


_ => { statements; }

const multi_X = _ => {
    let sum = a + b;
    console.log(sum);
};


multi_X(1, 2);
// Uncaught ReferenceError: a is not defined





```html

<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
    <li id="post-3">Item 3</li>
</ul>
```


```js
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target && e.target.nodeName == "LI") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
});



// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
    // e.target was the clicked element
    if (e.target && e.target.matches("a.classA")) {
        console.log("Anchor element clicked!");
    }
});


```





https://www.npmjs.com/package/gh-pages


将文件发布到GitHub上的gh页面分支









const fetch = require('node-fetch');


function showGitUsers(handle){
    const url = `https://api.github.com/users/${handle}`;
    fetch(url)
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
            console.log(user.location);
        });
}


showGitUsers('xgqfrms');






let notification = new Notification('notification title', {
    dir: 'auto',
    lang: 'zh-CN',
    body: `Web Notification API`
});



Notification.requestPermission()
    .then(function(permission){
        console.log(permission);
        console.log(typeof(permission));
        // denied
        // granted
        if(permission === 'granted'){
            console.log(`permission has been got!`)
        }else if(permission === 'denied'){
            console.log(`permission hasn't been got!`)
        }else{
            console.log(`permission Error!`)
        }
        return ` 
            ${
                ${permission === "granted"} 
                ${ ? }
                ${console.log("permission has been got!")}
                ${ : }
                ${console.log("permission hasn't been got!")}
            }
        `;
    }
);
























