const now = new Date();
// 現在時間

const year = now.getFullYear();
// 設year 為 現在的年份

const month = now.getMonth();
const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
]; 

// 設month 為 現在的月份
// index從0開始數
// ["",""]資料庫的概念
// array 陣列 存列表

const thisMonth = months[month];
// 用數數抓出資料庫裡面從零開始數的月份 0>1 11>12 以此類推

const date = now.getDate();
// 設date 為 現在的日期


const day = now.getDay();
const days = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
];
const thisDay = days[day];
// 星期日 index為0
// 設day 為禮拜幾


const hour = now.getHours(); 
const minute = now.getMinutes(); 
const second = now.getSeconds();
// 時分秒套組



// $("#demo").text(
//   year +
//     "/" +
//     (month + 1) +
//     "/" +
//     date +
//     ' ' +
//     thisDay +
//     ' ' +
//     hour +
//     ":" +
//     minute +
//     ":" +
//     second
// );


$("#demo").text(`${year}/${month + 1}/${date} ${thisDay} ${hour}:${minute}:${second}`);//
// jquery string 寫法