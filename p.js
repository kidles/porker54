// 锻炼结构化思维，所以有的代码显得啰嗦23333333

// 基础类 父类
class P {
    constructor(index, srcPath, value, huaSe) {
        this.index = index;
        this.srcPath = srcPath;
        this.value = value;
        this.huaSe = huaSe;
    }
}
// 黑桃，红桃，梅花，方块 子类
class Spade extends P {
    constructor(index, srcPath, value) {
        super(index, srcPath, value);
        this.huaSe = '黑桃';
    }
}
class Heart extends P {
    constructor(index, srcPath, value) {
        super(index, srcPath, value);
        this.huaSe = '红桃';
    }
}
class Club extends P {
    constructor(index, srcPath, value) {
        super(index, srcPath, value);
        this.huaSe = '梅花';
    }
}
class Diamond extends P {
    constructor(index, srcPath, value) {
        super(index, srcPath, value);
        this.huaSe = '方块';
    }
}
class Poker {
    constructor(obj) {
        this.obj = obj;
        this.openFlag = true;
        this.coverAllFlag = true;
    }
    // 返回一个54张牌 对象数组 [{},{},{}...]
    // 每张牌属性 num，srcPath，huaSe
    createPokerObj() {

        // 黑桃组 图片位置
        const srcPathSpadeArr = [0, '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.png', '10.jpg', '1a.jpg', '1b.jpg', '1c.jpg'];

        // 红桃组 图片位置
        const srcPathHeartArr = [0, '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '20.jpg', '2a.jpg', '2b.jpg', '2c.jpg'];

        // 梅花组 图片位置
        const srcPathPlumArr = [0, '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '30.jpg', '3a.jpg', '3b.jpg', '3c.jpg'];

        // 方块组 图片位置
        const srcPathDiamondArr = [0, '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '40.jpg', '4a.jpg', '4b.jpg', '4c.jpg'];

        // 大小王 图片位置
        const srcPathJokerArr = ['a.jpg', 'b.jpg'];

        // 所有图片位置
        const srcPathArr = [[...srcPathJokerArr], [...srcPathSpadeArr], [...srcPathHeartArr], [...srcPathPlumArr], [...srcPathDiamondArr]];

        const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        // 黑桃组 实例化
        // 数值 图片路径
        const s1 = new Spade(1, srcPathArr[1][1], numArr[1]);
        const s2 = new Spade(2, srcPathArr[1][2], numArr[2]);
        const s3 = new Spade(3, srcPathArr[1][3], numArr[3]);
        const s4 = new Spade(4, srcPathArr[1][4], numArr[4]);
        const s5 = new Spade(5, srcPathArr[1][5], numArr[5]);
        const s6 = new Spade(6, srcPathArr[1][6], numArr[6]);
        const s7 = new Spade(7, srcPathArr[1][7], numArr[7]);
        const s8 = new Spade(8, srcPathArr[1][8], numArr[8]);
        const s9 = new Spade(9, srcPathArr[1][9], numArr[9]);
        const s10 = new Spade(10, srcPathArr[1][10], numArr[10]);
        const s11 = new Spade(11, srcPathArr[1][11], numArr[11]);
        const s12 = new Spade(12, srcPathArr[1][12], numArr[12]);
        const s13 = new Spade(13, srcPathArr[1][13], numArr[13]);

        // 红桃组 实例化
        // 数值 图片路径
        const h1 = new Heart(21, srcPathArr[2][1], numArr[1]);
        const h2 = new Heart(22, srcPathArr[2][2], numArr[2]);
        const h3 = new Heart(23, srcPathArr[2][3], numArr[3]);
        const h4 = new Heart(24, srcPathArr[2][4], numArr[4]);
        const h5 = new Heart(25, srcPathArr[2][5], numArr[5]);
        const h6 = new Heart(26, srcPathArr[2][6], numArr[6]);
        const h7 = new Heart(27, srcPathArr[2][7], numArr[7]);
        const h8 = new Heart(28, srcPathArr[2][8], numArr[8]);
        const h9 = new Heart(29, srcPathArr[2][9], numArr[9]);
        const h10 = new Heart(30, srcPathArr[2][10], numArr[10]);
        const h11 = new Heart(31, srcPathArr[2][11], numArr[11]);
        const h12 = new Heart(32, srcPathArr[2][12], numArr[12]);
        const h13 = new Heart(33, srcPathArr[2][13], numArr[13]);

        // 梅花组 实例化
        // 数值 图片路径
        const c1 = new Club(41, srcPathArr[3][1], numArr[1]);
        const c2 = new Club(42, srcPathArr[3][2], numArr[2]);
        const c3 = new Club(43, srcPathArr[3][3], numArr[3]);
        const c4 = new Club(44, srcPathArr[3][4], numArr[4]);
        const c5 = new Club(45, srcPathArr[3][5], numArr[5]);
        const c6 = new Club(46, srcPathArr[3][6], numArr[6]);
        const c7 = new Club(47, srcPathArr[3][7], numArr[7]);
        const c8 = new Club(48, srcPathArr[3][8], numArr[8]);
        const c9 = new Club(49, srcPathArr[3][9], numArr[9]);
        const c10 = new Club(50, srcPathArr[3][10], numArr[10]);
        const c11 = new Club(51, srcPathArr[3][11], numArr[11]);
        const c12 = new Club(52, srcPathArr[3][12], numArr[12]);
        const c13 = new Club(53, srcPathArr[3][13], numArr[13]);
        // 方块组 实例化
        // 数值 图片路径
        const d1 = new Diamond(61, srcPathArr[4][1], numArr[1]);
        const d2 = new Diamond(62, srcPathArr[4][2], numArr[2]);
        const d3 = new Diamond(63, srcPathArr[4][3], numArr[3]);
        const d4 = new Diamond(64, srcPathArr[4][4], numArr[4]);
        const d5 = new Diamond(65, srcPathArr[4][5], numArr[5]);
        const d6 = new Diamond(66, srcPathArr[4][6], numArr[6]);
        const d7 = new Diamond(67, srcPathArr[4][7], numArr[7]);
        const d8 = new Diamond(68, srcPathArr[4][8], numArr[8]);
        const d9 = new Diamond(69, srcPathArr[4][9], numArr[9]);
        const d10 = new Diamond(70, srcPathArr[4][10], numArr[10]);
        const d11 = new Diamond(71, srcPathArr[4][11], numArr[11]);
        const d12 = new Diamond(72, srcPathArr[4][12], numArr[12]);
        const d13 = new Diamond(73, srcPathArr[4][13], numArr[13]);
        // 大小王
        const bigJ = new P(-1, srcPathArr[0][0], 80, '大王');
        const smallJ = new P(0, srcPathArr[0][1], 81, '小王');

        // 黑红梅方 对象数组
        const s = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
        const h = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13];
        const c = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13];
        const d = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13];
        const j = [smallJ, bigJ];

        // 54张牌 对象数组
        const poker54 = [...s, ...h, ...c, ...d, ...j];

        // 54张牌 对象数组  
        this.obj = poker54;
    }
    // 顺序排列
    sortPoker() {
        this.obj.sort((a, b) => a.index - b.index);
    }
    // 随机排列
    washPoker() {
        let arr = [];
        // 注意： 先把原始长度保留，因为下面会删除元素，改变原数组长度
        let originLength = this.obj.length;
        for (let i = 0; i < originLength; i++) {
            let index = Math.floor(Math.random() * this.obj.length);
            // 注意： splice返回被删的元素组成的数组
            arr[i] = this.obj.splice(index, 1)[0];
        }
        this.obj = arr;
    }
    // 设置图片
    setImg(imglists) {
        let imgs = imglists;
        imgs.forEach((item, index) => {
            item.src = './images/' + this.obj[index].srcPath;
        })
    }

    // 展示/折叠
    openPoker(nodelists) {
        let divs = nodelists;
        let count = 0;
        let c1 = 0,
            c2 = 0,
            c3 = 0;
        divs.forEach((item, index) => {
            if (index <= 17) {
                item.style.left = c1 + 'vw';
                c1 += 5;
                item.style.top = count + 'vh';
            } else if (index > 17 && index <= 35) {
                item.style.left = c2 + 'vw';
                c2 += 5;
                item.style.top = count + 10 + 'vh';
            } else {
                item.style.left = c3 + 'vw';
                c3 += 5;
                item.style.top = count + 20 + 'vh';
            }
        })
    }
    closePorker(nodelists) {
        let divs = nodelists;
        divs.forEach(item => {
            item.style.left = 0;
            item.style.top = 0;
        })
    }
    // openFlag控制
    openPorkerOrClose(nodelists) {
        if (this.openFlag == true) {
            this.openPoker(nodelists);
        } else {
            this.closePorker(nodelists);
        }
        this.openFlag = !this.openFlag;
    }
    // 覆盖全部牌，coverFlag控制
    coverAll(imglists) {
        let imgs = imglists;
        if (this.coverAllFlag == true) {
            imgs.forEach(item =>
                item.style.opacity = 0);
        } else {
            imgs.forEach(item =>
                item.style.opacity = 1);
        }
        this.coverAllFlag = !this.coverAllFlag;
    }

    // 单张牌添加事件 
    EventOne(imglists) {
        let imgs = imglists;
        imgs.forEach(item => {
            item.addEventListener('click', () => {
                item.style.opacity == 0 ? item.style.opacity = 1 : item.style.opacity = 0;
            })
            item.addEventListener('mouseover', () => {
                item.style.cursor = 'pointer';
            })
        });
    }
}

let imgs = document.querySelector('#porker').querySelectorAll('img');
let divs = document.querySelector('#porker').querySelectorAll('div');

// 初始化
let l = new Poker();
l.createPokerObj();
l.setImg(imgs);
l.openPoker(divs);
l.EventOne(imgs);
l.openPorkerOrClose(divs);

// 按钮添加事件
let btns = document.querySelector('.btns').querySelectorAll('button');

btns.forEach(item => {
    item.style.cursor = 'pointer';
    item.style.outline = 'none';
});

btns[0].addEventListener('click', () => {
    l.washPoker();
    l.setImg(imgs);
});
btns[1].addEventListener('click', () => {
    l.sortPoker();
    l.setImg(imgs);
});
btns[2].addEventListener('click', () => {
    l.openPorkerOrClose(divs);
});
btns[3].addEventListener('click', () => {
    l.coverAll(imgs);
})









