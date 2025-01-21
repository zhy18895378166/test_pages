alert("hello zhy!!")

const http = require('http');

/**
 * 获取GET提交的参数
 * @return JSON格式
 * @author Terry
*/
function getArgs(){
    var args = {};
    var match = null;
    var search = decodeURIComponent(location.search.substring(1));
    var reg = /(?:([^&]+)=([^&]+))/g;
    while((match = reg.exec(search))!==null){
        args[match[1]] = match[2];
    }
    return args;
}

alert(getArgs())
