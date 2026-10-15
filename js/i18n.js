"use strict";
/* 站点双语支持：中文/英文，按系统语言自动适配 */
(function () {
	var TEXTS = {
		'title.index': ['Terobi独立游戏组', 'Terobi Indie Game Studio'],
		'title.about': ['关于Terobi独立游戏组', 'About Terobi Indie Game Studio'],
		'nav.blog': ['制作人的博客', "Producer's Blog"],
		'nav.home': ['主页', 'Home'],
		'nav.team': ['团队介绍', 'About Us'],
		'nav.about': ['关于我们', 'About Us'],
		'nav.bili': ['访问作者B站', "Author's Bilibili"],
		'slide.noodle.title': ['都市小面馆', 'City Noodle Shop Simulator'],
		'slide.noodle.desc': ['一款关于中式面馆的模拟经营游戏', 'A simulation game about running a Chinese noodle shop'],
		'slide.stg2.title': ['变装战机2', 'Hanger Fighter 2'],
		'slide.stg2.desc': ['实时战机切换系统，新颖的STG游戏体验', 'Real-time fighter switching system, a fresh STG experience'],
		'slide.jiong.title': ['囧之国', 'Jump Kingdom'],
		'slide.jiong.desc': ['拒绝套路，每关都是脑洞大开', 'No clichés — every level is full of wild ideas'],
		'slide.stg1.title': ['变装战机', 'Hanger Fighter'],
		'slide.stg1.desc': ['已经是黑历史了…………', 'Our early game — a bit embarrassing now'],
		'games.title': ['游戏列表', 'Game List'],
		'play.online': ['在线游戏', 'Play Online'],
		'play.close': ['关闭', 'Close'],
		'footer.follow': ['关注我们', 'Follow Us'],
		'about.h1': ['做热爱的游戏顺带挣钱', 'Making games we love — and earning along the way'],
		'about.p1': ['热衷于创造独特的、且团队喜欢的游戏类型，希望做出能让团队自身也玩的很开心的新奇作品', 'We are passionate about creating unique games that the whole team loves, hoping to make novel works that we ourselves enjoy playing.'],
		'about.p2': ['在让各位游戏玩家满意的同时，也希望团队获得一份不错的收入，以此壮大团队，做出质量更高的作品', 'While keeping players satisfied, we also aim for a healthy income to grow the team and create even better games.'],
		'about.h2': ['拥有全面研发能力', 'Full-cycle development capability'],
		'about.p3': ['Terobi虽然是个小团队，但是拥有程序、美术、音乐、策划、运营等一切能力', 'Though a small team, Terobi covers programming, art, music, game design, operations and everything in between.'],
		'about.h3': ['寻求工作与生活的平衡', 'Work-life balance'],
		'about.p4': ['Terobi不希望工作成为大家的全部，所以我们的工作强度比大部分团队都小，但是我们的效率并不低', "We don't want work to be everything, so our workload is lighter than most teams' — without sacrificing efficiency."],
		'hist.title': ['团队历史', 'Our History'],
		'hist.t1': ['2010年4月', 'April 2010'],
		'hist.p1': ['Terobi制作组成立，利用业余时间进行第一款游戏《变装战机》的开发', 'The Terobi studio was founded, developing its first game "Hanger Fighter" in spare time'],
		'hist.t2': ['2017年7月', 'July 2017'],
		'hist.p2': ['更名Terobi独立游戏组，正式开始全职制作独立游戏', 'Renamed Terobi Indie Game Studio, going full-time on indie game development'],
		'hist.t3': ['2023年', '2023'],
		'hist.p3': ['启动新LOGO，团队开始面向PC与主机平台开发游戏，为开发优秀游戏而努力', 'Adopted a new logo and began developing games for PC and consoles, striving to create great games']
	};

	function detect() {
		var saved = null;
		try { saved = localStorage.getItem('site-lang'); } catch (e) {}
		if (saved === 'zh' || saved === 'en') return saved;
		var lang = (navigator.language || navigator.userLanguage || 'zh-CN').toLowerCase();
		return lang.indexOf('zh') === 0 ? 'zh' : 'en';
	}

	function apply(lang) {
		try { localStorage.setItem('site-lang', lang); } catch (e) {}
		var nodes = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < nodes.length; i++) {
			var key = nodes[i].getAttribute('data-i18n');
			if (TEXTS[key]) nodes[i].textContent = TEXTS[key][lang === 'zh' ? 0 : 1];
		}
		// 切换按钮显示另一种语言
		var toggles = document.querySelectorAll('.lang-toggle');
		for (var j = 0; j < toggles.length; j++) {
			toggles[j].textContent = lang === 'zh' ? 'EN' : '中文';
		}
		document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
	}

	function init() {
		apply(detect());
		var toggles = document.querySelectorAll('.lang-toggle');
		for (var i = 0; i < toggles.length; i++) {
			toggles[i].addEventListener('click', function (e) {
				e.preventDefault();
				var saved = null;
				try { saved = localStorage.getItem('site-lang'); } catch (err) {}
				var cur = saved || (detect() === 'zh' ? 'zh' : 'en');
				apply(cur === 'zh' ? 'en' : 'zh');
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
