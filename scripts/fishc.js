const rules = {
  name: "【鱼C论坛】： ",
  type: 2, //签到类型 2 需要formhash
  op: "签到",
  charset: "gbk",
  url1: "https://fishc.com.cn/plugin.php?id=k_misign:sign", //用于获取formhash的链接
  cookie: config.fishc.cookie,  
  reg1: 'formhash=(.+?)\\"', //formhash正则
  verify: "您需要先登录才能继续本操作", //验证cookie状态
  signmethod: "get", //签到请求方式 get/post
  signurl: "https://fishc.com.cn/plugin.php?id=k_misign:sign&operation=qiandao&format=text&formhash=@formhash", //签到链接
  reg2: "", //重复签到判断
  reg3: "", //签到成功判断
  info: "", //签到成功返回信息
};

async function fishc(){
const template = require("../Template");
return rules.name+await template(rules)
}
module.exports=fishc