/**
 * Created by zhengqiguang on 2017/4/16.
 */

module.exports = {
    summary: "my test rule",
    *beforeSendRequest(res){

        return null
    },
    *beforeDealHttpsRequest(requestDetail){
        console.log(requestDetail);
        return true;
    },
    *beforeSendResponse(req, res){
        if (req.url.indexOf("weixin110.qq.com") !== -1) {
            console.log("hhhhhhhhhhhhhhhhhhhhhh");

            res.response.statusCode = 404;

            // var newResponse = Object.assign({}, res.reponse);
            // newResponse.body = '--from anyproxy--';
            return {
                response: res.response
            }


        }


    }
}

