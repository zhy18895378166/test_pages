alert(location.search.substring(1))


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

// JavaScript code to return data
document.addEventListener('DOMContentLoaded', (event) => {
    const data = {
        message: "Hello, this is the data returned by JavaScript!",
        timestamp: new Date().toISOString()
    };

    // Display the data in the HTML
    document.getElementById('data').innerText = JSON.stringify(data, null, 2);
});

