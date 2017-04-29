/**
 * Created by zhengqiguang on 2017/4/20.
 */

var Question = require("zhihu").Question;
var path = require("path"),
    fs = require("fs");


let answers = Question.answers("32077992", 31);

answers.then(function (response) {


        fs.writeFileSync(path.resolve(__dirname, `../files/zhihu-3.json`), JSON.stringify(response));


})



