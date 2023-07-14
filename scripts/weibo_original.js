//https://obfuscator.io/
//https://s.weibo.com/realtime?q=1005顺顺利利&rd=realtime&tw=realtime&Refer=weibo_realtime
// 1005顺顺利利

var wb_topics = unescape(recent_weibo_topic.deobfuscate()).split(",");
var wb_url = '68စ74စ74စ70စ73စ25စ33စ41စ2fစ2fစ73စ2eစ77စ65စ69စ62စ6fစ2eစ63စ6fစ6dစ2fစ72စ65စ61စ6cစ74စ69စ6dစ65စ25စ33စ46စ71စ25စ33စ44စ31စ30စ30စ35စ25စ75စ39စ38စ37စ41စ25စ75စ39စ38စ37စ41စ25စ75စ35စ32စ32စ39စ25စ75စ35စ32စ32စ39စ25စ32စ36စ72စ64စ25စ33စ44စ72စ65စ61စ6cစ74စ69စ6dစ65စ25စ32စ36စ74စ77စ25စ33စ44စ72စ65စ61စ6cစ74စ69စ6dစ65စ25စ32စ36စ52စ65စ66စ65စ72စ25စ33စ44စ77စ65စ69စ62စ6fစ5fစ72စ65စ61စ6cစ74စ69စ6dစ65';
var wb_replace_str = '31စ30စ30စ35စ25စ75စ39စ38စ37စ41စ25စ75စ39စ38စ37စ41စ25စ75စ35စ32စ32စ39စ25စ75စ35စ32စ32စ39';
var wb_window = null;

function initWeibo() {
    var div_label = document.querySelector('span.weibo_topic_label');
	div_label.innerHTML = wb_topic;
}

var index = 0;
async function searchWeibo() {
	while (true) {
		var wb_topic = wb_topics[index];
		var refresh_url = unescape(wb_url.deobfuscate()).replace(unescape(wb_replace_str.deobfuscate()), encodeURIComponent(wb_topic));
		if (!wb_window) {
			wb_window = window.open(refresh_url);
		} else {
			wb_window.location.replace('about:blank');
			await delay(500);
			wb_window.location.replace(refresh_url);
		}
		await delay(wb_search_seconds * 1000);
		index = (index + 1) % wb_topics.length;
  }
}
