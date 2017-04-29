/**
 * Created by zhengqiguang on 2017/4/19.
 */


var fs = require("fs"),
    path = require("path");

var wxJokeApi = require("../../common/src/wxJokeApi");

var info = fs.readFileSync(path.resolve(__dirname, "../files/zhihu-0.json"), "UTF-8");

var WxJokeItem = require("../../common/src/module/wxJokeItem");


//
// console.log(WxJokeItem.getItemJSON("asdf", "asdfg"));
// wxJokeApi.insertOne(WxJokeItem.getItemJSON("asdf", "asdfg")).then(result => {
//     console.log("dddddddddddd", result);
// });




// restoreTextApi.insertOne({name: "xdfdfdf"}).then((result) => {
//     console.log("ddddddddddddd", result);
// });
//
//
// restoreTextApi.insertOne({name: "bbbbbbb"}).then((result) => {
//     console.log("ddddddddddddd", result);
// });

//
// for (var i = 0, obj; obj = s[i]; i++) {
//     var html = obj.html;
//
//     if (html.indexOf("img") === -1) {
//         console.log(html);
//     }
//
// }
