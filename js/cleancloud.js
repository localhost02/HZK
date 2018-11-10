/**
 * //////////////////////leancloud存储服务//////////////////////
 */
// 初始化存储服务
var AV={
	Query,
	User
};
var APP_ID = 'VnN17aGjD8YIcWTpGOC7d7Pu-9Nh9j0Va';
var APP_KEY = 'YYJkIeqkSLlVN8X0jpOYqkzV';
AV.init({
	appId: APP_ID,
	appKey: APP_KEY,
	// 目前仅支持中国节点
	region: 'cn'
});
AV.Query
//开启调试日志
localStorage.setItem('debug', 'leancloud*,LC*');