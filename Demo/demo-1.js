// 双斜杠后的内容在js里是属于注释内容不会生效

var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

function key() {
obj[arguments[0]] = arguments[1]
}  

/* 斜杠和星号作为多行注释也会被JavaScript忽略
关键字function 声明一个函数，内部的arguments[]访问传入key()里参数
对待传入的参数JS是以数组去管理的，比如 abc = ["vip", 123]就是一个数组
用方括号[数值]来索引数组，abc[0]就是"vip",索引位置起始于0
obj["vip"]则是通过属性名来索引对象obj内的"vip"对应的值，
如果对象不存在"vip" 这个属性就会自动创建一个，然后给赋值。
其实你也可以写成 function key(x,y) {obj[x]=y}
只不过为了方便后面一些概念讲解先铺垫,而且有时候不去管理参数的多少更好
*/

key("subscribed", true);
key("subscriptionStatus", "YEARLY_SUBSCRIBED");
key("eligibleForFreeTrial", true);

// 然后在这种情况下你可以要求用户只以这种 key(键，值)去执行即可


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改