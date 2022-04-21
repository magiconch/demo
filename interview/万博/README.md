# 万博2021前端基础笔试题v1
> 注：
> 1.	每题20分，答题时间20分钟。
> 2.	不作答的题不给分，对于作答不完整，但思路书写清晰的也可给满分。


## 1. 点击图中1，2，3处分别输出什么内容?

```html
<body>
<div class="container">
    <div class="subA">subA</div>
    <div class="subB">subB</div>
</div>
<script>
    document.querySelector(".subA").addEventListener("click", (e) => {
        console.log("subA click");
        console.log(e.target.getAttribute("class"));
    });
    document.querySelector(".container").addEventListener("click", (e) => {
        console.log("container click");
        console.log(e.target.getAttribute("class"));
    })
</script>
</body>
```

答：

- 点击1输出`container click`和`subB`
- 点击2输出`subA click`, `subA`, `container click`, `subA`
- 点击3输出`container click`和`subB`
 
 
## 2. 利用数据生成对应的dom结构
```html
<body>
<div id="container"></div>
<script>
    //假如以下有1000个节点，请将以下数据解析生成对应的dom结构
    var treeData = [
        {"name": "A-1"},
        {"name": "A-2"},
        {"name": "A-3"},
        {
            "name": "A-4",
            "sub": [
                {"name": "A-4-1"},
                {"name": "A-4-2"},
                {
                    "name": "A-4-3",
                    "sub": [
                        {"name": "A-4-3-1"},
                        {"name": "A-4-3-2"}
                    ]
                }
            ]
        }
    ];
    //在下面空白处写下通用方法
</script>
</body>
```
答：[答案](2.js)




## 3. 根据需求，给出优化方案
 
 需求：
 如图左边为操作区，右边为缩略图。当用户在左边区域操作dom时，右边缩略图能实时更新
 已知条件：
 1. 截图非常耗性能
 2. 左则dom中所有元素的信息都有记录，如下。当元素信息改变时，数据也会同步刷新

 ```js
 {  
    a1:{"x":100,"y":200,"width":100,"height:100,",color":"#FF0000"},
    a2:{"x":200,"y":100,"width":50,"height:100,",color":"#000000"},
    ...
 }
 
 //-------------------  以下是实现方案（伪代码） -------------------//
 //截图函数，能将dom截成一张图片(截图非常耗性能)
 function domToImage(){
 
 }
 a1.on("位置改变",function(){						
    domToImage();
 })
 a1.on("大小改变",function(){
     domToImage();
 })
 a1.on("颜色改变",function(){
       domToImage();
 })
 ```

请根据以上条件优化此方案

答：[Minimap设计优化](./3.md)




## 4. 利用mousedown mousemove mouseup，实现一个dom拖动类，mousedown mousemove mouseup 分别应该注册在哪个dom节点上（写思路，不要写代码）
```html
<body>
<div class="dragDom">
</body>
```

- 将mousemove mouseup注册在全局上

- 将mousedown 注册在dragDom上

在按下鼠标的时候，记录当前的位置，通过计算drag的位移量来更新dragDom的绝对位置


## 5. 以下是匀速直线运动，请分别写出匀速圆周运动、自由落体运动
写思路、公式

```html
<div class="ball"></div>
<script>
    var ball = document.querySelector(".ball");
    ball.style.position ="absolute";
    var s = 0;
    var v = 1;
    setInterval(() => {
        s += v;
        ball.style.top = s + "px";
    })
    //匀速圆周运动
    
    function uniformCircularMotion(ball, delta, r) {
        setInterval(() => {
            x = ball.style.left - Math.sin(delta) * r;
            y =  ball.style.top - Math.cos(delta) * r;
            ball.style.top = y + "px";
            ball.style.left = x + "px";
            delta += 0.01;
        })
    }
    
    //自由落体运动
    function freeFall(ball, g) {
        // 自由落体公式为 s = 1/2*g*t^2
        let t = 0;
        const high = ball.style.top;
        setInterval(() => {

            ball.style.top = high + 0.5*g*t*t;
            t + =1;
        }, 1000);
    }

</script>
</body>
```


