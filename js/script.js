// 获取轮播图容器元素
var slider = document.querySelector(".slider");
// 获取图片列表元素
var images = document.querySelector(".images");
// 获取所有的图片元素
var imgs = document.querySelectorAll(".images img");
// 获取上一张按钮元素
var prev = document.querySelector(".prev");
// 获取下一张按钮元素
var next = document.querySelector(".next");

// 定义一个变量，用来记录当前显示的图片索引
var index = 0;

// 定义一个函数，用来实现图片的上下滚动
function scroll() {
    // 计算图片列表的高度，等于图片的高度乘以图片的数量
    var height = imgs[0].offsetHeight * imgs.length;
    // 设置图片列表的高度
    images.style.height = height + "px";
    // 设置图片列表的垂直偏移量，等于图片的高度乘以当前显示的图片索引的相反数
    images.style.top = -imgs[0].offsetHeight * index + "px";
}

// 定义一个函数，用来实现上一张按钮的点击事件
function prevClick() {
    // 判断当前显示的图片索引是否为第一张
    if (index == 0) {
        // 如果是第一张，就跳转到最后一张
        index = imgs.length - 1;
    } else {
        // 如果不是第一张，就显示上一张
        index--;
    }
    // 调用滚动函数
    scroll();
}

// 定义一个函数，用来实现下一张按钮的点击事件
function nextClick() {
    // 判断当前显示的图片索引是否为最后一张
    if (index == imgs.length - 1) {
        // 如果是最后一张，就跳转到第一张
        index = 0;
    } else {
        // 如果不是最后一张，就显示下一张
        index++;
    }
    // 调用滚动函数
    scroll();
}

// 给上一张按钮添加点击事件监听器，绑定prevClick函数
prev.addEventListener("click", prevClick);

// 给下一张按钮添加点击事件监听器，绑定nextClick函数
next.addEventListener("click", nextClick);
