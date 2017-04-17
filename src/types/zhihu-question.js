/**
 * Created by zhengqiguang on 2017/4/16.
 */

var got = require("got");
var cheerio = require("cheerio");

var fs = require("fs"),
    path = require("path");


module.exports = {
    urls: {
        questionType: {
            url: "https://www.zhihu.com/question/32077992"
        }

    },

    start () {



        //
        // got(this.urls.questionType.url).then(response => {
        //
        //     fs.writeFileSync(path.resolve(__dirname, "t.html"), response.body);
        //     console.log(response.body.indexOf("175"), "tttttttttt");
        //     this.parseHtml(response.body);
        // });


    },
    parseHtml(html){
        let $1 = cheerio.load(html, {
                withDomLvl1: true,
                normalizeWhitespace: false,
                decodeEntities: false
            }),
            listItem = $1(".Question-mainColumn .Card:first-child .List-item");


        // console.log(listItem.html());


    }


}

