/**
 * Created by zhengqiguang on 2017/4/29.
 */


var fs = require("fs"),
    path = require("path");

var wxJokeApi = require("../../common/src/wxJokeApi");

var info = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../files/zhihu-0.json"), "UTF-8"));

var WxJokeItem = require("../../common/src/module/wxJokeItem");

/* 第一条*/

let iText = info[0].text;

var temp = iText.split(/\d+\.|\d+、/);

temp = temp.map((item) => {
    // item = item.replace(/(\一*(.*))$/img, "");


    return item.replace(/^\n|\n$/, "").replace(/^\ +|\ $/, "");
});
temp.splice(0, 1);
temp.splice(temp.length - 1, 1);


let insertTemp = [];

for (let i = 0; i < temp.length; i++) {
    let item = temp[i];
    if (item && !/\-/.test(item)) {
        console.log(item);
        var t = item.split(/\n/);
        (t.length >= 2) && insertTemp.push(WxJokeItem.getItemJSON(t[0], t[1]));
    }

}


wxJokeApi.insertMany(insertTemp).then(result => {
});

// fs.writeFileSync(path.resolve(__dirname, "../temp/zhihu-0-0.json"), JSON.stringify(temp));





