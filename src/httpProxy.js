/**
 * Created by zhengqiguang on 2017/4/16.
 */

const AnyProxy = require("anyproxy");
const rule1 = require("./proxy-rules/rule-1");
const exec = require('child_process').exec;


const options = {
    port: 8001,
    rule: rule1,
    webInterface: {
        enable: true,
        webPort: 8002,
        wsPort: 8003
    },
    forceProxyHttps: true
}

const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => {
    console.log("proxy ready");
});

proxyServer.on("error", e => {
    console.log("proxy error", e);
});

if (!AnyProxy.utils.certMgr.ifRootCAFileExists()) {
    AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
        if (!error) {
            const certDir = require("path").dirname(keyPath);
            console.log("The cert is generated at", certDir);
            const isWin = /^win/.test(process.platform);

            if (isWin) {
                exec('start .', {cwd: certDir});
            } else {
                exec('open .', {cwd: certDir});
            }

        } else {
            console.error('error when generating rootCA', error);
        }

    });
}

proxyServer.start();
