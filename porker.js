// 牌组
class Porker {
    constructor() {
        this.huaSe = ['方块', '红桃', '梅花', '黑桃'];
        this.shuZi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        // 存取字符串数组
        this.porker = ['大王', '小王'];
    }
    // 原始牌组方法
    origin() {
        for (let v of this.huaSe) {
            for (let j of this.shuZi) {
                this.porker.push(v + j);
            }
        }
        return this.porker;
    }
    // 洗牌方法
    washPorker() {
        // 存放生成的新牌组
        let newPorker = [];
        for (let i = 0; i < this.porker.length; i++) {
            let index = Math.floor(Math.random() * this.porker.length);
            newPorker[i] = this.porker[index];
        }
        this.porker = newPorker;
        return this.porker;
    }
    // 设置字符串对应图片src
    setImg(origin = this.porker) {
        let imgs = document.querySelector('#porker').querySelectorAll('img');
        imgs.forEach(item => {
            let res = origin.splice(0, 1);
            switch (res[0]) {
                case '小王':
                    item.src = './images/b.jpg';
                    break;
                case '大王':
                    item.src = "./images/a.jpg";
                    break;
                case '黑桃K':
                    item.src = './images/1c.jpg';
                    break;
                case '黑桃Q':
                    item.src = './images/1b.jpg';
                    break;
                case '黑桃J':
                    item.src = './images/1a.jpg';
                    break;
                case '黑桃10':
                    item.src = './images/10.jpg';
                    break;
                case '黑桃9':

                    item.src = './images/19.png';
                    break;
                case '黑桃8':

                    item.src = './images/18.jpg';
                    break;
                case '黑桃7':

                    item.src = './images/17.jpg';
                    break;
                case '黑桃6':

                    item.src = './images/16.jpg';
                    break;
                case '黑桃5':

                    item.src = './images/15.jpg';
                    break;
                case '黑桃4':

                    item.src = './images/14.jpg';
                    break;

                case '黑桃3':
                    item.src = './images/13.jpg';
                    break;
                case '黑桃2':

                    item.src = './images/12.jpg';
                    break;
                case '黑桃1':

                    item.src = './images/11.jpg';
                    break;
                case '红桃K':
                    item.src = './images/2c.jpg';
                    break;
                case '红桃Q':
                    item.src = './images/2b.jpg';
                    break;
                case '红桃J':
                    item.src = './images/2a.jpg';
                    break;
                case '红桃10':
                    item.src = './images/20.jpg';
                    break;
                case '红桃9':
                    item.src = './images/29.jpg';
                    break;
                case '红桃8':
                    item.src = './images/28.jpg';
                    break;
                case '红桃7':
                    item.src = './images/27.jpg';
                    break;
                case '红桃6':
                    item.src = './images/26.jpg';
                    break;
                case '红桃5':
                    item.src = './images/25.jpg';
                    break;
                case '红桃4':
                    item.src = './images/24.jpg';
                    break;
                case '红桃3':
                    item.src = './images/23.jpg';
                    break;
                case '红桃2':
                    item.src = './images/22.jpg';
                    break;
                case '红桃1':
                    item.src = './images/21.jpg';
                    break;
                case '梅花K':
                    item.src = './images/3c.jpg';
                    break;
                case '梅花Q':
                    item.src = './images/3b.jpg';
                    break;
                case '梅花J':
                    item.src = './images/3a.jpg';
                    break;
                case '梅花10':
                    item.src = './images/30.jpg';
                    break;
                case '梅花9':
                    item.src = './images/39.jpg';
                    break;
                case '梅花8':
                    item.src = './images/38.jpg';
                    break;
                case '梅花7':
                    item.src = './images/37.jpg';
                    break;
                case '梅花6':
                    item.src = './images/36.jpg';
                    break;
                case '梅花5':
                    item.src = './images/35.jpg';
                    break;
                case '梅花4':
                    item.src = './images/34.jpg';
                    break;
                case '梅花3':
                    item.src = './images/33.jpg';
                    break
                case '梅花2':
                    item.src = './images/32.jpg';
                    break;

                case '梅花1':
                    item.src = './images/31.jpg';
                    break;
                case '方块K':
                    item.src = './images/4c.jpg';
                    break;
                case '方块Q':
                    item.src = './images/4b.jpg';
                    break;
                case '方块J':
                    item.src = './images/4a.jpg';
                    break;
                case '方块10':
                    item.src = './images/40.jpg';
                    break;
                case '方块9':
                    item.src = './images/49.jpg';
                    break;
                case '方块8':
                    item.src = './images/48.jpg';
                    break;
                case '方块7':
                    item.src = './images/47.jpg';
                    break;
                case '方块6':
                    item.src = './images/46.jpg';
                    break;
                case '方块5':
                    item.src = './images/45.jpg';
                    break;
                case '方块4':
                    item.src = './images/44.jpg';
                    break;
                case '方块3':
                    item.src = './images/43.jpg';
                    break;
                case '方块2':
                    item.src = './images/42.jpg';
                    break;
                case '方块1':
                    item.src = './images/41.jpg';
                    break;
            }
        })
    }
}
// 打开折叠
class Controls {
    constructor(openFlag, coverAllFlag) {
        this.openFlag = openFlag,
            this.coverAllFlag = coverAllFlag
    };
    // 展开,使用vw，vh做响应式
    openPorker() {
        let divs = document.querySelector('#porker').querySelectorAll('div');
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
    // 折叠
    closePorker() {
        let divs = document.querySelector('#porker').querySelectorAll('div');
        divs.forEach(item => {
            item.style.left = 0;
            item.style.top = 0;
        })
    }
    // 一键控制展开，折叠
    openPorkerOrClose() {
        if (this.openFlag == true) {
            this.openPorker();
        } else {
            this.closePorker();
        }
        this.openFlag = !this.openFlag;
    }
    coverAll() {
        let imgs = document.querySelector('#porker').querySelectorAll('img');
        if (this.coverAllFlag == true) {
            imgs.forEach(item =>
                item.style.opacity = 0);
        } else {
            imgs.forEach(item =>
                item.style.opacity = 1);
        }
        this.coverAllFlag = !this.coverAllFlag;
    }
}


// 顺序显示
function sortPorkerAndDisplay() {
    let p = new Porker();
    p.origin();
    p.setImg();
}
// 洗牌显示
function washPorkerAndDisplay() {
    let p = new Porker();
    p.origin();
    p.washPorker();
    p.setImg();
}
//添加事件
// 单张盖住或显示
function EventOne() {
    let imgs = document.querySelector('#porker').querySelectorAll('img');
    imgs.forEach(item => {
        item.addEventListener('click', (e) => {
            let flag = item.style.opacity == 0;
            flag ? item.style.opacity = 1 : item.style.opacity = 0;
        })
    });
}
EventOne();
// 每个按钮添加事件
function addEvents() {
    document.querySelector('#washed').addEventListener('click', washPorkerAndDisplay);
    document.querySelector('#origin').addEventListener('click', sortPorkerAndDisplay);

    let controls = new Controls(true, true);
    document.querySelector('#zhankai').addEventListener('click', controls.openPorkerOrClose.bind(controls));
    document.querySelector('#coverAll').addEventListener('click', controls.coverAll);
}
addEvents();
// 初始化
sortPorkerAndDisplay();