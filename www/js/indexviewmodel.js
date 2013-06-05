/**
 * @author neusoft
 */
var indexviewmodel = {
	languagelist:ko.observableArray(
		[
			{name:'中文',index:0},
			{name:'藏文',index:1},
			{name:'蒙文',index:2},
			{name:'维文',index:3},
			{name:'朝鲜文',index:4}
		]),
	navlist:ko.observableArray(["新闻","图片","视频","话题"]),
	title:ko.observable('中国海军狙击手点杀真人手持靶震惊美军司令'),
	pageContent:ko.observable('5月31日，正在南海舰队访问的美国海军太平洋舰队司令塞西尔·哈尼走进中国海军陆战队某旅训练场，零距离感受中国海军陆战队的别样风采。在观摩当天的军事科目演练时，一场狙击手点杀真人手持目标靶的演练令哈尼震惊不已，这位久经沙场的老兵也情不自禁地鼓起了四次掌声。</br>'+
								'上午9时，在观礼台上观看完中国陆战队员精彩的拳术格斗表演后，大家的目光都定格在百米之外的两名陆战队员的身上。两名队员身着迷彩服，头戴迷彩帽，手中分别持有2个苹果般大小的红色气球，站立于射击靶台处。该旅旅长陈卫东向美军代表团介绍：“这是陆战队狙击手训练的一项特殊科目，狙击手对真人手持靶进行实弹射击，4发子弹打掉两名队员手中的4个气球。”</br>'+
								'现场氛围顿时紧张起来，大家的目光牢牢锁定在远处的两名狙击手身上，两名狙击手身着特制伪装服，在距离靶一百米处隐蔽待命。随着解说员的解说声，第一名狙击手扣动了扳机。只听“砰”的一声，百米外一名队员左手边地气球应声爆破。“砰”紧随其后，另一名队员左手边的气球破裂。四声枪响，四次掌声，四个气球全部命中。目标靶处两名队员始终纹丝未动。所有观摩的嘉宾都为标靶处的队员捏一把冷汗，而四发四中的成绩充分展示了中国海军陆战队狙击手过硬的心理素质和射击水平。'),
	fontfamily:ko.observable(),
	selectHint:ko.observable('选择语言'),
	recentSearchClicked:function(item){
		console.log(item.name);
		if(item.index == 1){
			indexviewmodel.fontfamily('zangfont');
			$('#footernavbar li:eq(0) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">དཀར   དགའ  དང</span></span></a>');
			$('#footernavbar li:eq(1) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">སྦྱང་ཚན་གཉ</span></span></a>');
			$('#footernavbar li:eq(2) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">ཀིལ་ཁིལ་གིལ་ངིལ།</span></span></a>');
			$('#footernavbar li:eq(3) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">ཀོན་ཁོན་གོན་ངོན།</span></span></a>');
			indexviewmodel.languagelist(
				[
					{name:'དེ། ། ',index:0},
					{name:'གཟིགས། ། ས  དཔའ  དབང དམར  དཀྱིལ  ད ',index:1},
					{name:'ལ་མགོ་ཅན་བཅུ། ལྐ་ལྒ་ལྔ་ལྕ་ལྗ་ལྟ་ལྡ་ལྤ་ལྦ་ལྷ ས  དཔའ  དབང དམར  དཀྱིལ  ད ',index:2},
					{name:'ཀིབ་ཁིབ་གིབ་ངིབ། ས  དཔའ  དབང དམར  དཀྱིལ  ད ',index:3},
					{name:'སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ ཀིར་ཁིར་གིར་ངིར། ས  དཔའ  དབང དམར  དཀྱིལ  ད ',index:4}
				]
			);
			$('#popupMenu ul').listview('refresh'); 
			indexviewmodel.selectHint('ྐོར བསྐྱུར བ ཀེད་ཁེད་གེད་ངེད། ');
			indexviewmodel.title('ཀོབ་ཁོབ་གོབ་ངོབ། ཀས་ཁས་གས་ངས། བསྣམས  བརྩམས  བསྩལ  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ཀུད་ཁུད་གུད་ངུད། སྦྱང་ཚན་ལྔ་བ།  མགོ་ཅན ཀེལ་ཁེལ་གེལ་ངེལ། ིག་པ།  སྔོན་འཇུག་འ ཀླ་གླ་བླ་ཟླ་རླ་སླ ཀིག་ཁིག་གིག་ངིག སྦྱང་ཚན་བཞི་པ།  འདོགས་ཅན ོ་མཆོག ། དཀར   དགའ  དང སྦྱང་ཚན་ལྔ་བ།  མགོ་ཅན ');
			indexviewmodel.pageContent('5ཀིལ་ཁིལ་གིལ་ངིལ། 31ཀེག་ཁེག་གེག་ངེག ，ོ་མཆོག ། ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ ཀུལ་ཁུལ་གིལ་ངུལ། བརྐོས  བརྐྱངས  བས ས་པ།  དབྱངས་དང་རྗེས་འཇུག ཀིབ་ཁིབ་གིབ་ངིབ། སྦྱང་ཚན་བཅུ་བ། ས ྗེད བ བསྣམས  བརྩམས  བསྩལ ྔོན་འཇུག་མ ས་པ།  དབྱངས་དང་རྗེས་འཇུག སྦྱང་ཚན་ལྔ་བ།  མགོ་ཅན ད  གཙང  གཞན   གཟའ  གཡས  གཤམ  གསལ གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། ཀེས་ཁེས་གེས་ངེས། ·རྙིལ  བསྙེས ེལ མནོས  མཚོ  མཛོད ས་པ།  དབྱངས་དང་རྗེས་འཇུག ཀིལ་ཁིལ་གིལ་ངིལ། ཀོབ་ཁོབ་གོབ་ངོབ། ཀས་ཁས་གས་ངས། ཀྲ་ཁྲ་གྲ་ཏྲ་ཐྲ་དྲ་པྲ་ཕྲ་བྲ་མྲ་སྲ་ཧྲ ཏིང་འཛིན་ཞི་ཉིད་རིག་ཅིང་ ཀུནད། དོརད།  ཤིནད། ཀོན་ཁོན་གོན་ངོན། ཀེང་ཁེང་གེང་ངེང་། ，མཁྱེན  མཁྲིག   མགྱོགས མགྲོན ཀོལ་ཁོལ་གོལ་ངོལ། ོད  མཇལ  མཉེན མཐུ མད ཀོབ་ཁོབ་གོབ་ངོབ། ཀས་ཁས་གས་ངས། ཀྲ་ཁྲ་གྲ་ཏྲ་ཐྲ་དྲ་པྲ་ཕྲ་བྲ་མྲ་སྲ་ཧྲ སྦྱང་ཚན་བཅུ་བ། ས རྐྱ་རྒྱ་རྨྱ་སྐྱ་སྒྱ་སྤྱ་སྦྱ་སྨྱ ཀིག་ཁིག་གིག་ངིག ེགས འཕེལ  འབར  འཚལ  འཛ 。ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ ཀིག་ཁིག་གིག་ངིག ྔོས  བར ཀྭ་ཁྭ་གྭ་ཉྭ་དྭ་ཚྭ་ཞྭ་ཟྭ་རྭ་ལྭ་ཤྭ་ཧྭ་རྩྭ་གྲྭ་ཕྱྭ ཆུང་ངུའི་དོན་གྱི་འུ་ཡིག སྦྱང་ཚན་བཅུ་བ། ས ཀག་ཁག་གག་ངག ཀུབ་ཁུབ་གུབ་ངུབ། གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། གཅིག  གཉིས  གཏམས   གདན གན ཀིད་ཁིད་གིད་ངིད། ，一ཀེང་ཁེང་གེང་ངེང་།  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ཀུད་ཁུད་གུད་ངུད། སྦྱང་ཚན་ལྔ་བ།  མགོ་ཅན ཀེལ་ཁེལ་གེལ་ངེལ། ིག་པ།  སྔོན་འཇུག་འ ཀླ་གླ་བླ་ཟླ་རླ་སླ ཀུག་ཁུག་གུག་ངུག ཀིག་ཁིག་གིག་ངིག སྦྱང་ཚན་བཅུ་བ། ས གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། གཅིག  གཉིས  གཏམས   གདན གན ཀའ་ཁའ་གའ་ངའ། རྙིལ  བསྙེས ེལ མནོས  མཚོ  མཛོད སྦྱང་ཚན་བཞི་པ།  འདོགས་ཅན ཀུབ་ཁུབ་གུབ་ངུབ། ཀལ་ཁལ་གལ་ངལ། ，ཀོད་ཁོད་གོད་ངོད། བརྐོས  བརྐྱངས  བས ལ་བཏགས་ཅན་དྲུག གསལ་བྱེད་སུམ་ཅུ། ད  གཙང  གཞན   གཟའ  གཡས  གཤམ  གསལ སྦྱང་ཚན་བཅུ་བ། ས སྦྱང་ཚན་དྲུག་པ།  བརྩེགས་ཡིག་བཅུ་བཞ གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། ཀོད་ཁོད་གོད་ངོད། སློབ་པའི་བུ་ལ་ཤ ཀུབ་ཁུབ་གུབ་ངུབ། ཁ་སྣོན་ཡི་གེ་གཅིག   ཧ ས་པ།  དབྱངས་དང་རྗེས་འཇུག སློབ་པའི་བུ་ལ་ཤ སྦྱང་ཚན་དང་པ 四བསྣམས  བརྩམས  བསྩལ ཀྲ་ཁྲ་གྲ་ཏྲ་ཐྲ་དྲ་པྲ་ཕྲ་བྲ་མྲ་སྲ་ཧྲ 。</br>'+
										'སྦྱང་ཚན་བརྒྱད་པ། སྔོན་འཇུག་ད བསྣམས  བརྩམས  བསྩལ 9ཀིད་ཁིད་གིད་ངིད། ，ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ ས  དཔའ  དབང དམར  དཀྱིལ  ད སྦྱང་ཚན་བརྒྱད་པ། སྔོན་འཇུག་ད བདེ་གཤེགས་བདེན་ངེས་ཡེ་ཤེས་ ཀྱ་ཁྱ་གྱ་པྱ་ཕྱ་བྱ་མྱ ཀོབ་ཁོབ་གོབ་ངོབ། ཀས་ཁས་གས་ངས། ཀུལ་ཁུལ་གིལ་ངུལ། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ེལ མནོས  མཚོ  མཛོད ཀིམ་ཁུམ་གིམ་ངིམ། ཀར་ཁར་གར་ངར། ཀོག་ཁོག་གོག་ངོག ཀལ་ཁལ་གལ་ངལ། ལ་བཏགས་ཅན་དྲུག ，ཝ་བཏགས་ཅན་བཅོ་ལྔ སྦྱང་ཚན་བཅུ་བ། ས ཀབ་ཁབ་གབ་ངབ། བཀལ  བགད  བཅ ཀེབ་ཁེབ་གེབ་ངེབ། ཀར་ཁར་གར་ངར། ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ བརྟས བསྟར  བལྟམས  བརྡར ཀིལ་ཁིལ་གིལ་ངིལ། སྦྱང་ཚན་གཉ སྦྱང་ཚན་བཅུ་བ། ས ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་། ཀུལ་ཁུལ་གིལ་ངུལ། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག སྦྱང་ཚན་བཅུ་བ། ས ེམ་ཁེམ་གེམ་ངེམ། སྦྱང་ཚན་བརྒྱད་པ། སྔོན་འཇུག་ད 。ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ེམ་ཁེམ་གེམ་ངེམ། ཀིའ་ཁིའ་གིའ་ངིའ། དེ། ། ེན  བཙོ  བཞུ  བཟ སྐ་སྒ་སྔ་སྙ་སྟ་སྡ་སྣ་སྤ་སྦ་སྨ་སྩ ，ཀིབ་ཁིབ་གིབ་ངིབ། སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ དེ། ། ེན  བཙོ  བཞུ  བཟ སྦྱང་ཚན་བདུན་པ། སྔོན་འཇུག་ག ，ིག་པ།  སྔོན་འཇུག་འ ཀོབ་ཁོབ་གོབ་ངོབ། མཁའ མགར མངར  མཆ ེལ མནོས  མཚོ  མཛོད 2སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ ྒོ  བསྒྲོད བསྒྱུར   བར གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། ཀོར་ཁོར་གོར་ངོར། སྦྱང་ཚན་བཅུ་བ། ས ཞ་ཟ་འ་ཡ། ར་ལ་ཤ་ས། ཧ་ཨ། ཀབ་ཁབ་གབ་ངབ། ，རྐ་རྒ་རྔ་རྗ་རྙ་རྟ་རྡ་རྣ་རྦ་རྨ་རྩ་རྫ། གདམས་ངག་ཟབ་ལམ་མ་ཆད་ཐ་དད་རངས། ། ཀུམ་ཁུམ་གུམ་ངུམ། ཀིག་ཁིག་གིག་ངིག ཀའ་ཁའ་གའ་ངའ། ཀུད་ཁུད་གུད་ངུད། 。ེལ མནོས  མཚོ  མཛོད ཀུནད། དོརད།  ཤིནད། ཀུནད། དོརད།  ཤིནད། བརྐོས  བརྐྱངས  བས བཀལ  བགད  བཅ སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ དཀར   དགའ  དང ེལ མནོས  མཚོ  མཛོད ོ་མཆོག ། དཀར   དགའ  དང ཀྱ་ཁྱ་གྱ་པྱ་ཕྱ་བྱ་མྱ ཀོན་ཁོན་གོན་ངོན། ：“ཀོད་ཁོད་གོད་ངོད། ད  གཙང  གཞན   གཟའ  གཡས  གཤམ  གསལ ཀུལ་ཁུལ་གིལ་ངུལ། སྦྱང་ཚན་བཅུ་བ། ས  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ཀོན་ཁོན་གོན་ངོན། སྦྱང་ཚན་བཅུ་བ། ས 一ས  དཔའ  དབང དམར  དཀྱིལ  ད མཁའ མགར མངར  མཆ ཀུབ་ཁུབ་གུབ་ངུབ། ， ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ཀེས་ཁེས་གེས་ངེས། ཀེལ་ཁེལ་གེལ་ངེལ། ིག་པ།  སྔོན་འཇུག་འ ཀླ་གླ་བླ་ཟླ་རླ་སླ ཀིག་ཁིག་གིག་ངིག ེལ མནོས  མཚོ  མཛོད ཀེང་ཁེང་གེང་ངེང་། ཀད་ཁད་གད་ངད། ཀུམ་ཁུམ་གུམ་ངུམ། ，4རྐ་རྒ་རྔ་རྗ་རྙ་རྟ་རྡ་རྣ་རྦ་རྨ་རྩ་རྫ། ཞགས།  གངས།   ནམས།  ཞབས། ཀེབ་ཁེབ་གེབ་ངེབ། རྐ་རྒ་རྔ་རྗ་རྙ་རྟ་རྡ་རྣ་རྦ་རྨ་རྩ་རྫ། ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ིག་པ།  སྔོན་འཇུག་འ ཀོབ་ཁོབ་གོབ་ངོབ། སྦྱང་ཚན་བཅུ་བ། ས 4སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ ཀབ་ཁབ་གབ་ངབ། 。”</br>'+
										'ྔོས  བར ཀན་ཁན་གན་ངན། ཀེང་ཁེང་གེང་ངེང་། ཀོར་ཁོར་གོར་ངོར། ཀིད་ཁིད་གིད་ངིད། སྦྱང་ཚན་གཉ ཀུལ་ཁུལ་གིལ་ངུལ། ，ཝ་བཏགས་ཅན་བཅོ་ལྔ སྦྱང་ཚན་བཅུ་བ། ས ཀབ་ཁབ་གབ་ངབ། ཀིའ་ཁིའ་གིའ་ངིའ། ཀིའ་ཁིའ་གིའ་ངིའ། ཀིན་ཁིན་གིན་ངིན། ཀེབ་ཁེབ་གེབ་ངེབ། ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ ི  བཤད  བསམ བཀྲ བཀ ཀུད་ཁུད་གུད་ངུད། སྦྱང་ཚན་བཅུ་བ། ས ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་།  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ེམ་ཁེམ་གེམ་ངེམ། སྦྱང་ཚན་བརྒྱད་པ། སྔོན་འཇུག་ད ，ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་།  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ ེམ་ཁེམ་གེམ་ངེམ། ཀིའ་ཁིའ་གིའ་ངིའ། ཀིས་ཁིས་གིས་ངིས། ཀིབ་ཁིབ་གིབ་ངིབ། སྐ་སྒ་སྔ་སྙ་སྟ་སྡ་སྣ་སྤ་སྦ་སྨ་སྩ ，ཉོན་མོངས་ཚོགས་བཅོམ་མགོན་པ ཀོལ་ཁོལ་གོལ་ངོལ། ཀིག་ཁིག་གིག་ངིག 一བརྟས བསྟར  བལྟམས  བརྡར ཀུད་ཁུད་གུད་ངུད། ཝ་བཏགས་ཅན་བཅོ་ལྔ ཀིར་ཁིར་གིར་ངིར། ཀླ་གླ་བླ་ཟླ་རླ་སླ 。ཀིའ་ཁིའ་གིའ་ངིའ། ཀེད་ཁེད་གེད་ངེད། ཀིམ་ཁུམ་གིམ་ངིམ། སྦྱང་ཚན་བཅུ་བ། ས ཀེད་ཁེད་གེད་ངེད། ཀུམ་ཁུམ་གུམ་ངུམ། ，ཀས་ཁས་གས་ངས། 一ཀོང་ཁོང་གོང་ངོང་།  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ མཁྱེན  མཁྲིག   མགྱོགས མགྲོན སྦྱང་ཚན་དང་པ ར་བཏགས་ཅན་བཅུ་གཉིས། 。ཞ་ཟ་འ་ཡ། ར་ལ་ཤ་ས། ཧ་ཨ། ཀུནད། དོརད།  ཤིནད། “ཀོན་ཁོན་གོན་ངོན། ”སྦྱང་ཚན་བཅུ་བ། ས 一ཀུམ་ཁུམ་གུམ་ངུམ། ，བརྟས བསྟར  བལྟམས  བརྡར སྦྱང་ཚན་གཉ 一ཀོང་ཁོང་གོང་ངོང་། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ཀྭ་ཁྭ་གྭ་ཉྭ་དྭ་ཚྭ་ཞྭ་ཟྭ་རྭ་ལྭ་ཤྭ་ཧྭ་རྩྭ་གྲྭ་ཕྱྭ ཀིས་ཁིས་གིས་ངིས། ཀིའ་ཁིའ་གིའ་ངིའ། དཀར   དགའ  དང ཀུམ་ཁུམ་གུམ་ངུམ། ཀག་ཁག་གག་ངག 。“ཀོན་ཁོན་གོན་ངོན། ”ཀིར་ཁིར་གིར་ངིར། ཀེང་ཁེང་གེང་ངེང་། ལ་མགོ་ཅན་བཅུ། ལྐ་ལྒ་ལྔ་ལྕ་ལྗ་ལྟ་ལྡ་ལྤ་ལྦ་ལྷ ，ྔོན་འཇུག་མ 一ཀོང་ཁོང་གོང་ངོང་། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ཀྭ་ཁྭ་གྭ་ཉྭ་དྭ་ཚྭ་ཞྭ་ཟྭ་རྭ་ལྭ་ཤྭ་ཧྭ་རྩྭ་གྲྭ་ཕྱྭ སྦྱང་ཚན་བཅུ་བ། ས ཀབ་ཁབ་གབ་ངབ། གཟིགས། ། 。四ཀུམ་ཁུམ་གུམ་ངུམ། སྦྱང་ཚན་བཅུ་གཅ ཀོན་ཁོན་གོན་ངོན། ，四བསྣམས  བརྩམས  བསྩལ ཀྲ་ཁྲ་གྲ་ཏྲ་ཐྲ་དྲ་པྲ་ཕྲ་བྲ་མྲ་སྲ་ཧྲ ，四སྦྱང་ཚན་དགུ་བ  སྔོན་འཇུག་བ ཀབ་ཁབ་གབ་ངབ། ཀེང་ཁེང་གེང་ངེང་། ཀུར་ཁུར་གུར་ངུར། 。ཀུག་ཁུག་གུག་ངུག ཀིག་ཁིག་གིག་ངིག ཀུད་ཁུད་གུད་ངུད། ེས་རབ་འཕེལ་གྱུར་ཅིག ཀོང་ཁོང་གོང་ངོང་། ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ཞ་ཟ་འ་ཡ། ར་ལ་ཤ་ས། ཧ་ཨ། ཏིང་འཛིན་ཞི་ཉིད་རིག་ཅིང་ ཀུག་ཁུག་གུག་ངུག ཀོག་ཁོག་གོག་ངོག ྒོ  བསྒྲོད བསྒྱུར   བར 。ྔོན་འཇུག་མ ཀིག་ཁིག་གིག་ངིག ྔོས  བར སྦྱང་ཚན་བཅུ་བ། ས ཀིག་ཁིག་གིག་ངིག ཀུམ་ཁུམ་གུམ་ངུམ། བཀལ  བགད  བཅ མཁའ མགར མངར  མཆ ཀུད་ཁུད་གུད་ངུད། ཀིག་ཁིག་གིག་ངིག ཀུད་ཁུད་གུད་ངུད། སྦྱང་ཚན་བཅུ་བ། ས ེར  འཁྱམས  འཁྲུད  འགྱུར  འག ོ་མཆོག ། 一ཀབ་ཁབ་གབ་ངབ། ཀུནད། དོརད།  ཤིནད། ，ཞ་ཟ་འ་ཡ། ར་ལ་ཤ་ས། ཧ་ཨ། 四རྐ་རྒ་རྔ་རྗ་རྙ་རྟ་རྡ་རྣ་རྦ་རྨ་རྩ་རྫ། 四ཀོབ་ཁོབ་གོབ་ངོབ། སྦྱང་ཚན་བཅུ་བ། ས བཀལ  བགད  བཅ མཁའ མགར མངར  མཆ ཀིབ་ཁིབ་གིབ་ངིབ། ཀུབ་ཁུབ་གུབ་ངུབ། སྦྱང་ཚན་དང་པ ཀོབ་ཁོབ་གོབ་ངོབ། ཀས་ཁས་གས་ངས། ཀྲ་ཁྲ་གྲ་ཏྲ་ཐྲ་དྲ་པྲ་ཕྲ་བྲ་མྲ་སྲ་ཧྲ  ཀོད་ཁོད་གོད་ངོད། ིག་པ།  སྔོན་འཇུག་འ སྦྱང་ཚན་བདུན་པ། སྔོན་འཇུག་ག ཀིད་ཁིད་གིད་ངིད། སྦྱང་ཚན་བཅུ་བ། ས དེ། ། ཀུལ་ཁུལ་གིལ་ངུལ། ས་པ།  དབྱངས་དང་རྗེས་འཇུག ཀུམ་ཁུམ་གུམ་ངུམ། ི  བཤད  བསམ བཀྲ བཀ 。');
		}else if(item.index == 2){
			indexviewmodel.fontfamily('menfont');
			
			$('#footernavbar li:eq(0) a').html('<a data-bind="css:fontfamily" href="#"  style="font-family: MENKSOF0" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text"> </span></span></a>');
			$('#footernavbar li:eq(1) a').html('<a data-bind="css:fontfamily" href="#"  style="font-family: MENKSOF0" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text"></span></span></a>');
			$('#footernavbar li:eq(2) a').html('<a data-bind="css:fontfamily" href="#"  style="font-family: MENKSOF0" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">     </span></span></a>');
			$('#footernavbar li:eq(3) a').html('<a data-bind="css:fontfamily" href="#"  style="font-family: MENKSOF0" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">  </span></span></a>');
			indexviewmodel.languagelist(
				[
					{name:'ᠰᠤᠷᠠᠭ ᠴᠢᠮᠡᠭᠡ',index:0},
					{name:'ᠺᠣᠮᠫᠢᠦ᠋ᠲ᠋ᠧᠷ',index:1},
					{name:'ᠬᠡᠯᠡᠨ ᠵᠦᠢ',index:2},
					{name:'ᠵᠣᠬᠢᠶᠠᠯ',index:3},
					{name:'ᠪᠠᠭᠠᠵᠢ',index:4}
				]
			);
			$('#popupMenu ul').listview('refresh'); 
			indexviewmodel.selectHint('ᠬᠢᠲᠠᠳ');
			indexviewmodel.title('ᠮᠣᠩᠭᠣᠯ ᠦᠰᠦᠭ ᠮᠢᠨᠢ ᠰᠠᠢᠢᠬᠠᠨ - ᠮᠤᠩᠭ᠋ᠤᠯ ᠪᠢᠴᠢᠭ᠌');
			indexviewmodel.pageContent('<div id="MAINCONTENT" style="font-size: 24px;-webkit-writing-mode:vertical-lr;text-align:justfy;">ᠮᠣᠩᠭᠣᠯ ᠦᠰᠦᠭ ᠮᠢᠨᠢ ᠰᠠᠢᠢᠬᠠᠨ<br>&nbsp;&nbsp;ᠲ᠂ᠳᠡᠯᠭᠡᠷᠰᠠᠩ<br>ᠠᠮᠲᠠᠷᠠᠬᠨ ᠰᠢᠮᠳᠡᠷᠬᠡᠨ ᠣᠩᠰᠢᠬᠤ ᠳᠤ<br>ᠠᠶᠠᠯᠭᠤ ᠳᠠᠭᠤᠨ ᠤ ᠬᠢᠨᠢ ᠢᠷᠠᠭᠤᠬᠠᠨ ᠭᠡᠵᠢ᠂<br>'
    +'ᠠᠯᠭᠤᠷ ᠰᠠᠢᠢᠬᠠᠨ ᠪᠢᠴᠢᠬᠦ ᠳᠤ<br>ᠠᠴᠤᠭ ᠰᠢᠯᠪᠢ ᠶᠢᠨ ᠬᠢᠨᠢ ᠡᠪᠯᠢᠭ᠍ᠬᠡᠨ ᠭᠡᠵᠢ᠃<br><br>ᠤᠷᠪᠠᠭᠤᠯᠤᠨ ᠡᠷᠭᠢᠭᠦᠯᠦᠨ ᠣᠩᠰᠢᠬᠤ ᠳᠤ<br>ᠤᠷᠤᠰᠤᠮ᠎ᠠ ᠲᠣᠳᠤᠬᠠᠨ ᠰᠣᠨᠤᠰᠲᠠᠬᠤ ᠭᠡᠵᠢ᠂<br>ᠣᠳᠬ᠎ᠠ ᠪᠡᠷ ᠨᠢ ᠪᠠᠭᠤᠯᠭᠠᠵᠤ ᠪᠢᠴᠢᠬᠦ ᠳᠤ<br>ᠣᠷᠠᠯᠢᠭ ᠭᠣᠶᠤᠬᠠᠨ ᠬᠠᠷᠠᠭᠳᠠᠬᠤ ᠭᠡᠵᠢ᠃<br><br>ᠶᠠᠩᠵᠤ ᠪᠦᠷᠢ ᠶᠢᠨ ᠠᠶᠠᠯᠭᠤ ᠶᠢ<br>ᠪᠦᠷᠢᠨ ᠳᠡᠮᠳᠡᠭᠯᠡᠳᠡᠭ ᠦᠰᠦᠭ ᠰᠢᠦ<br>'
    +'ᠶᠠᠭᠠᠷᠠᠵᠤ ᠲᠡᠪᠡᠳᠡᠭᠰᠡᠨ ᠦᠶ᠎ᠡ ᠳᠤ<br>ᠲᠠᠲᠠᠯᠠᠵᠤ ᠪᠣᠯᠳᠠᠭ ᠴᠤ ᠦᠰᠦᠭ ᠰᠢᠦ᠃<br><br>ᠡᠭᠡᠰᠢᠭ᠌ ᠭᠡᠢᠢᠭᠦᠯᠦᠭᠴᠢ ᠬᠠᠮᠵᠢᠮᠠᠨᠵᠢᠨ<br>ᠦᠶ᠎ᠡ ᠪᠦᠷᠢᠯᠳᠦᠨ ᠲᠣᠭᠳᠠᠳᠠᠭ ᠰᠢᠦ<br>ᠦᠶ᠎ᠡ ᠨᠢ ᠦᠶ᠎ᠡ ᠲᠠᠢ ᠪᠡᠨ ᠨᠡᠢᠢᠯᠡᠮᠡᠨᠵᠢᠨ<br>ᠦᠭᠡ ᠦᠰᠦᠭ ᠪᠦᠲᠦᠳᠡᠭ ᠰᠢᠦ᠃<br><br>ᠴᠠᠭᠠᠨ ᠲᠣᠯᠤᠭᠠᠢ ᠶᠢ ᠡᠵᠡᠮᠰᠢᠪᠡᠯ<br>ᠴᠠᠭᠠᠰᠢ ᠨᠢ ᠦᠰᠦᠭᠯᠡᠯ ᠳᠤ ᠣᠷᠤᠳᠠᠭ ᠰᠢᠦ᠂<br>ᠦᠰᠦᠭᠯᠡᠯ ᠳᠤ ᠣᠷᠤᠵᠤ ᠴᠠᠭᠠᠷᠠᠪᠠᠯ<br>ᠦᠯᠢᠭᠡᠷ ᠦᠨ ᠨᠣᠮ ᠣᠩᠰᠢᠳᠠᠭ ᠰᠢᠦ᠃<br><br>'
    +'ᠦᠭᠡ ᠪᠡᠨ ᠶᠠᠷᠢᠳᠠᠭ ᠬᠥᠮᠦᠨ<br>ᠦᠰᠦᠭ ᠢ ᠨᠢ ᠰᠤᠷᠬᠤ ᠳᠤ ᠳᠦᠭᠦᠮ ᠰᠢᠦ᠂<br>ᠦᠰᠦᠭ ᠢ ᠨᠢ ᠮᠡᠳᠡᠳᠡᠭ ᠬᠦᠮᠦᠨ<br>ᠪᠢᠴᠢᠭ᠌ ᠲᠠᠢ ᠪᠣᠯᠬᠤ ᠳᠤ ᠬᠢᠯᠪᠠᠷ ᠰᠢᠦ᠃<br><br>ᠮᠠᠨ ᠤ ᠮᠣᠩᠭᠣᠯ ᠦᠰᠦᠭ ᠭᠡᠭ᠍ᠴᠢ<br>ᠮᠠᠩᠯᠠᠢ ᠰᠠᠢᠢᠬᠠᠨ ᠪᠠᠢᠢᠳᠠᠭ ᠰᠢᠦ᠂<br>ᠮᠠᠰᠢ ᠡᠷᠲᠡ ᠵᠣᠬᠢᠶᠠᠭᠳᠠᠭᠠᠳ<br>ᠮᠠᠷᠲᠠᠭᠳᠠᠯ ᠦᠭᠡᠢ ᠬᠡᠷᠡᠭᠯᠡᠭᠳᠡᠭᠰᠡᠭᠡᠷ ᠰᠢᠦ᠃<br><br>'
    +'ᠮᠣᠷᠤᠩᠬᠠᠢ ᠮᠣᠰᠢᠭᠠᠢ ᠦᠰᠦᠭ ᠭᠡᠵᠦ<br>ᠮᠡᠳᠡᠯᠭᠡ ᠮᠡᠭᠦᠰᠴᠦᠳ ᠭᠦᠳᠭᠡᠪᠡᠴᠦ<br>ᠮᠣᠯᠤᠷ ᠡᠷᠳᠡᠨᠢ ᠶᠢᠨ ᠦᠰᠦᠭ ᠶᠢᠡᠨ<br>ᠮᠣᠩᠭᠣᠯ ᠬᠦᠦ ᠪᠢ ᠰᠤᠷᠤᠨ᠎ᠠ᠃<br><br>ᠠᠷᠢᠶᠠᠲᠠᠨ ᠰᠢᠪᠠᠭᠤᠨ ᠤ ᠬᠡᠯᠡ ᠭᠡᠵᠦ<br>ᠠᠳᠬᠠᠭ ᠰᠠᠨᠠᠭᠠᠳᠠᠨ ᠭᠠᠵᠢᠭᠤᠳᠠᠭᠤᠯᠪᠠᠴᠤ᠂<br>ᠠᠪᠤ ᠳᠡᠭᠡᠳᠦᠰ ᠦᠨ ᠬᠡᠯᠡ ᠪᠡᠨ<br>ᠠᠯᠳᠠᠯ ᠦᠭᠡᠢ ᠪᠢ ᠡᠵᠡᠮᠰᠢᠨ᠎ᠡ!<br><br>'
    +'ᠭᠠᠢᠢᠬᠠᠮᠰᠢᠭᠲᠤ ᠰᠠᠢᠢᠬᠠᠨ ᠬᠡᠯᠡ ᠪᠡᠨ<br>ᠭᠠᠩᠭᠠᠩ ᠰᠠᠢᠢᠬᠠᠨ ᠦᠰᠦᠭ ᠶᠢᠡᠨ<br>ᠭᠠᠯᠪᠠ ᠶᠡᠭᠦᠷᠡᠳᠡᠯ᠎ᠡ ᠭᠡᠷᠡᠭᠯᠡᠭᠡᠳ<br>ᠭᠠᠯ ᠭᠣᠯᠤᠮᠲᠠ ᠪᠡᠨ ᠬᠦᠭᠵᠢᠭᠦᠯᠦᠨ᠎ᠡ᠃<br></div>');
		}else if(item.index == 3){
			indexviewmodel.fontfamily('weifont');

			$('#footernavbar li:eq(0) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">اخبار</span></span></a>');
			$('#footernavbar li:eq(1) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">تصویر</span></span></a>');
			$('#footernavbar li:eq(2) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">تصویری</span></span></a>');
			$('#footernavbar li:eq(3) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">کلمات مشکل </span></span></a>');
			indexviewmodel.languagelist(
				[
					{name:'چینی ',index:0},
					{name:'تبتی تەزىيەنامە ',index:1},
					{name:'بوزاڭلاشماق تەزىيەنامە ',index:2},
					{name:'تەپەككۇر تەزىيەنامە ',index:3},
					{name:'چاۋشىيەن تەزىيەنامە ',index:4}
				]
			);
			$('#popupMenu ul').listview('refresh'); 
			indexviewmodel.selectHint('را انتخاب کنید زبان ');
			indexviewmodel.title('جۇڭگو نیروی دریایی مۆكتۈرمە جەڭ اصابت دست نقطه کشتن واقعی دست پشتیبانی هدف شوک ایالات متحده تقویت فرمانده ');
			indexviewmodel.pageContent('5ماه 31ئەنئەنىۋى بايرام ，مثبت به جنوب دریا ناوگان دسترسی چىم3 ایالات متحده نیروی دریایی اقیانوس ساکن ناوگان فرمانده با دریچه بستن غەرب ئەمىر ·خانى رفتن را وارد کنید جۇڭگو سپاه تفنگداران دریایی پوكۇنى سفر آموزش میدان ，صفر فاصله تجربه جۇڭگو سپاه تفنگداران دریایی چىم3 آیا نمی نمونه رفتار زیبا 。به نظر دەڭسىمەك وقتی که روز چىم3 نظامی موضوع رېپىتېتسىيە قىلماق رېپىتېتسىيە ئەلھال ，一میدان مۆكتۈرمە جەڭ اصابت دست نقطه کشتن واقعی دست پشتیبانی هدف هدف چىم3 رېپىتېتسىيە قىلماق رېپىتېتسىيە ساخت خانى شوک نه يامان بىلەن يولداش بولما، نادان بىلەن سىرداش بولماا ，این موقعیت ئىككى تەرەپ خېلى تىركەشتى پس از میدان جنگ چىم3 قدیمی سرباز همچنین ئەيمەنمەك نه از ممنوع جمع اوری سۇدىن سۈزۈلگەن بالا تىنىقسىز بولۇپ،جان ئۈزگەندى 四بار تشویق و تمجید 。</br>'+
										'بر بعد از ظهر 9ئەلھال ，به بررسی ایستاده بر ساعت کامل جۇڭگو نبرد زمین عضو تیم شگفت انگیز بوکس شبکه جنگ کارایی پس از ，هر کس چىم3 نگاه تمام مجموعه شبکه به صد متر تقسیم و حکومت خارج از چىم3 هر دو نام نبرد زمین عضو تیم چىم3 بدن بر 。هر دو نام عضو تیم بدن ئاجايىپ تىمەن ئولتۇرماق بىھوش بولماق ئاسمان بۇلۇتلانماق لباس ，سر بېشىغا ئېلىپ كۆتۈرمەك بىھوش بولماق ئاسمان بۇلۇتلانماق کلاه ，دست به به ترتیب نگه داشتن 2تمام سیب بۇ قەدەر اندازه چىم3 قرمز بالون ，ایستاده به تیراندازی هدف رەسەتخانا دفتر 。ئۇنىڭغا خوپ بولۇپتۇ سفر سفر طولانی دەرقەمتە مەلۇم قىلماق ھىماتچى قوشۇن ھەسسىدار به ایالات متحده تقویت نمایندگی معرفی ：“این شود نبرد زمین تیم مۆكتۈرمە جەڭ اصابت دست آموزش چىم3 一تاناسىپنىڭ ئىچكى ئەزاسى ویژگی های خاص موضوع ，مۆكتۈرمە جەڭ اصابت دست به واقعی دست پشتیبانی هدف رفتار تحریف حقایق بمب تیراندازی ，4مو گلوله جنگ سقوط هر دو نام عضو تیم دست به چىم3 4تمام بالون 。”</br>'+
										'محل جىددىيلىكنى بوشاشتۇرماق قورشاۋنى بۆسمەك تەرتىپكە سالماق ئەلھال تنش بالا ，هر کس چىم3 نگاه زندان زندان قۇلۇپ مجموعه به بسیار دفتر چىم3 هر دو نام مۆكتۈرمە جەڭ اصابت دست بدن بر ，هر دو نام مۆكتۈرمە جەڭ اصابت دست بدن ئاجايىپ تىمەن ئولتۇرماق ویژه استتار لباس ，به فاصله هدف 一صد متر دفتر پنهان خارلىماق زندگی 。با تفسیر عضو چىم3 تفسیر ئۇنىڭ كۈلۈۋاتقاندىكى خىرقىراق ئاۋازى ，ئېسىلزادىلارنىڭ نەسىلى 一نام مۆكتۈرمە جەڭ اصابت دست کشیدن سۇدىن سۈزۈلگەن بالا تىنىقسىز بولۇپ،جان ئۈزگەندى ماشه 。تنها گوش دادن “پاڭ ”چىم3 一ئۇنىڭ كۈلۈۋاتقاندىكى خىرقىراق ئاۋازى ，صد متر خارج از 一نام عضو تیم سمت چپ به گاز توپ Ⅲ باید ئۇنىڭ كۈلۈۋاتقاندىكى خىرقىراق ئاۋازى انفجار 。“پاڭ ”تنگ تەڭكەشلىمەك سپس ，بۆلەك 一نام عضو تیم سمت چپ چىم3 بالون پارگی 。四ئۇنىڭ كۈلۈۋاتقاندىكى خىرقىراق ئاۋازى زېنىت پىلىموت تەسىر كۆرسەتمەك ，四بار تشویق و تمجید ，四تمام بالون تمام اصابت 。هدف هدف دفتر هر دو نام عضو تیم همیشه دانه الیاف نه حرکت 。همه نظر دەڭسىمەك چىم3 تەقدىرلىمەك تماشاگران مهمان تمام مانند خەلقئارا ترانسىكرىپسىيە هدف دفتر چىم3 عضو تیم قالب 一باغ(2) عرق سرد ，ئەكسىچە 四مو 四به چىم3 موفقیت کامل نمایشگاه نشان سۇدىن سۈزۈلگەن بالا تىنىقسىز بولۇپ،جان ئۈزگەندى جۇڭگو سپاه تفنگداران دریایی مۆكتۈرمە جەڭ اصابت دست بود سخت چىم3 روانشناسی کیفیت تەدرىجىي پەسەيمەك تیراندازی سطح 。');
		}else if(item.index == 4){
			//indexviewmodel.navlist(["뉴스","그림","비디오","화제"]);
			$('#footernavbar li:eq(0) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">뉴스</span></span></a>');
			$('#footernavbar li:eq(1) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">그림</span></span></a>');
			$('#footernavbar li:eq(2) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">비디오</span></span></a>');
			$('#footernavbar li:eq(3) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">화제</span></span></a>');
			indexviewmodel.languagelist(
				[
					{name:'중국어',index:0},
					{name:'티베트어',index:1},
					{name:'덮어쓰다말',index:2},
					{name:'묶다나는너회말',index:3},
					{name:'사람의말',index:4}
				]
			);
			$('#popupMenu ul').listview('refresh'); 
			indexviewmodel.selectHint('선택언어');

			indexviewmodel.title('중국(북경/베이징)해군저격수점죽여!확실성손보유목표충격미국군단사령관');
			indexviewmodel.pageContent('5월31일，바야흐로남해함대액세스과녁미국해군태평양함대사령관스토퍼서너회·허네팔가다입력중국(북경/베이징)해병대어느여행훈련장，제로거리감쏘이다중국(북경/베이징)해병대과녁마종류우아한 태도。에견학하다자리에서일과녁군제목…역으로생사를기간，一분야저격수점죽여!확실성손보유목표목표과녁…역으로생사를하다허네팔충격아니멎다，이위치오래다후싸움터과녁노병또한자신의바닥도도록하다뒤에四차박수。</br>'+
										'오전9기간，에스탠드를 검토에감시철저한중국(북경/베이징)육전대회원훌륭한권투격투연수 직원후，누구든지과녁뚫어지게보다벌써고정그리드에백미의외과녁두이름육전대회원과녁몸에。두이름팀 구성원몸…에채색비단옷，머리쓰다애호가채색비단좋은 사람，수중각기보유2낱사과…같은크기과녁붉은풍선，서있는에사격목표단사무실。당해여행여단장오래되다지키다동쪽에미국군단사명소개：“이있다육전대저격수훈련과녁一항별스럽다제목，저격수에확실성손보유목표행위실탄사격，4머리로드 글 머리 기호때려두이름팀 구성원수중과녁4낱풍선。”</br>'+
										'사이트분위기 에이다끼기간켕기다올라，누구든지과녁뚫어지게보다감옥감옥래치 업에먼데과녁두이름저격수몸에，두이름저격수몸닿다특제위장옷，에거리목표一백미사무실숨겨진명령을。과해설자과녁해설소리를，순서一이름저격수당기세요뒤에트리거。오직가 들어“빵”과녁一소리를，백미외一이름팀 구성원왼쪽에바닥풍선맞소리발파。“빵”째다따르다이후，별도로一이름팀 구성원왼쪽에과녁풍선파열。四소리를총신음향，四차박수，四낱풍선속속들이명중。목표목표사무실두이름팀 구성원항상주름철사아니흐늑거리다。모든견학하다과녁훌륭하다손님벌써으로부호목표사무실과녁팀 구성원곰팡이一쥐다식은 땀，과四머리四에과녁성취철저한보이다뒤에중국(북경/베이징)해병대저격수십자가단단한과녁심리학상의품질과사격레벨。');
		}else{

			$('#footernavbar li:eq(0) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">新闻</span></span></a>');
			$('#footernavbar li:eq(1) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">图片</span></span></a>');
			$('#footernavbar li:eq(2) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">视频</span></span></a>');
			$('#footernavbar li:eq(3) a').html('<a data-bind="css:fontfamily" href="#" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-theme="a" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">话题</span></span></a>');
			indexviewmodel.languagelist(
				[
					{name:'中文',index:0},
					{name:'藏文',index:1},
					{name:'蒙文',index:2},
					{name:'维文',index:3},
					{name:'朝鲜文',index:4}
				]
			);
			$('#popupMenu ul').listview('refresh'); 
			indexviewmodel.selectHint('选择语言');
			indexviewmodel.title('中国海军狙击手点杀真人手持靶震惊美军司令');
			indexviewmodel.pageContent('5月31日，正在南海舰队访问的美国海军太平洋舰队司令塞西尔·哈尼走进中国海军陆战队某旅训练场，零距离感受中国海军陆战队的别样风采。在观摩当天的军事科目演练时，一场狙击手点杀真人手持目标靶的演练令哈尼震惊不已，这位久经沙场的老兵也情不自禁地鼓起了四次掌声。</br>'+
								'上午9时，在观礼台上观看完中国陆战队员精彩的拳术格斗表演后，大家的目光都定格在百米之外的两名陆战队员的身上。两名队员身着迷彩服，头戴迷彩帽，手中分别持有2个苹果般大小的红色气球，站立于射击靶台处。该旅旅长陈卫东向美军代表团介绍：“这是陆战队狙击手训练的一项特殊科目，狙击手对真人手持靶进行实弹射击，4发子弹打掉两名队员手中的4个气球。”</br>'+
								'现场氛围顿时紧张起来，大家的目光牢牢锁定在远处的两名狙击手身上，两名狙击手身着特制伪装服，在距离靶一百米处隐蔽待命。随着解说员的解说声，第一名狙击手扣动了扳机。只听“砰”的一声，百米外一名队员左手边地气球应声爆破。“砰”紧随其后，另一名队员左手边的气球破裂。四声枪响，四次掌声，四个气球全部命中。目标靶处两名队员始终纹丝未动。所有观摩的嘉宾都为标靶处的队员捏一把冷汗，而四发四中的成绩充分展示了中国海军陆战队狙击手过硬的心理素质和射击水平。');
		}
		
		$( "#popupMenu" ).popup( "close" );
	},

};

ko.applyBindings(indexviewmodel);


