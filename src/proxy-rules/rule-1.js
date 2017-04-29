/**
 * Created by zhengqiguang on 2017/4/16.
 */

var path = require("path"),
    fs = require("fs");


//知乎 微信 查看全文问题 https://www.zhihu.com/question/32077992
module.exports = {
    summary: "my test rule",
    *beforeSendRequest(req){
        console.log(req.url);
    },

    *onError(req, error){
        return null;
    }
}

function uintToString(uintArray) {
    try {
        var a = String.fromCharCode.apply(null, new Uint16Array(uintArray));
        return a;
    } catch (e) {
        return "{}";
    }
}
