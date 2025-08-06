// json文件定义
const modalContents = {
    "嫦娥奔月": {
        "title": "嫦娥奔月",
        "content": "<p>传说远古时候，天上出现了十个太阳，烤得大地冒烟，海水干涸，老百姓眼看无法再生活下去。</p>" +
            "<p>有个名叫后羿的英雄，力大无穷，他登上昆仑山顶，运足神力，拉开神弓，一口气射下九个太阳。从此，气候适宜，万物得以生长，人们尊称后羿为“箭神”。</p>" +
            "<p>后羿立下盖世神功，不少人慕名前来投师学艺，心术不正的逢蒙也混了进来。</p>" +
            "<p>后羿从西王母那里求得了不死之药，交给妻子嫦娥保管。嫦娥将药藏进梳妆台的百宝匣里，不料被逢蒙看见了，他就起了歹心，想把不死药据为己有。</p>" +
            "<p>有一天，后羿率众徒外出狩猎，心怀鬼胎的逢蒙假装生病，留了下来。待后羿率众人走后不久，逢蒙手持宝剑闯入内宅后院，威逼嫦娥交出不死药。</p>" +
            "<p>嫦娥知道自己不是逢蒙的对手，危急之时她当机立断，转身打开百宝匣，拿出不死药一口吞了下去。嫦娥吞下药后，身子立时飘离地面、冲出窗口，向天上飞去。由于嫦娥牵挂着丈夫，便飞落到离人间最近的月亮上成了仙。</p>" +
            "<p>后羿回来后，得知了此事，悲痛欲绝，可是又无可奈何，只能遥望夜空，对着月亮呼唤嫦娥的名字。百姓们也十分同情后羿，为他的遭遇感到惋惜，同时也在每年的八月十五这一天，摆上嫦娥平时爱吃的食品，来寄托对嫦娥的思念，渐渐地，就形成了中秋节拜月的习俗。</p>",
        "videoId": "BV1nJ411N7BA"
    },
    "后羿射日": {
        "title": "后羿射日",
        "content": "<p>后羿射日是中国古代经典神话传说，远古时期，天上十日并出，炽热的阳光烘烤大地，大地干裂，庄稼绝收，河流干涸，百姓生活在水深火热之中，苦不堪言。</p>" +
            "<p>这时，英雄后羿挺身而出，他力大无穷且箭术高超，登上昆仑山顶，拉开神弓，凭借着非凡的神力，接连射出利箭，一口气射下九个太阳，让天地间恢复正常秩序，气候变得适宜，万物得以重新生长，后羿也因此成为人们心目中的大英雄，其事迹被广为传颂。</p>" +
            "<p>这一传说体现了古人对自然现象的想象以及对英雄的崇敬，承载着深厚的文化内涵，在我国民间文化中有着重要地位，影响深远，至今仍常被提及和演绎。</p> ",
        "videoId": "BV1Hp4y1n7jo"
    },
    "女娲补天": {
        "title": "女娲补天",
        "content": "<p>女娲补天是中国古代著名的神话传说之一，有着丰富且奇幻的内容。</p>" +
            "<p>传说在远古时代，天塌地陷，世界陷入了巨大的混乱与灾难之中。天空出现了一个巨大的窟窿，天河之水从窟窿中倾泻而下，大地被洪水淹没，到处是汪洋一片，百姓们流离失所，苦不堪言，众多生灵面临着灭顶之灾。</p>" +
            "<p>女娲看到世间生灵涂炭的凄惨景象，心生悲悯，决心要拯救苍生。于是，她开始四处寻找可以用来补天的材料，最终不辞辛劳地采集了五色石。之后，女娲凭借着自己强大的神力，将五色石熔化成液体，用这些液体一点点地去填补天上的那个大窟窿，经过艰难的努力，终于把天补好了。</p>" +
            "<p>但女娲的功绩还不止于此，天虽然补好了，可洪水依旧泛滥，女娲又斩杀了一只在中原一带作恶的黑龙，止住了洪水泛滥的源头，还收集了大量芦草，把它们烧成灰后用来堵住四处漫流的洪水。经过女娲的不懈努力，天地间终于恢复了平静，世间万物又可以在安稳的环境中繁衍生息，人类也得以继续生存发展，女娲也因此成为了人们心中伟大的创世神和救世主，她的故事被世世代代传颂下来，彰显着古人对神力以及拯救苍生的英雄形象的崇敬与向往。</p>",
        "videoId": "BV1U3KTegEaw"
    },
    "牛郎织女": {
        "title": "牛郎织女",
        "content": "<p>牛郎织女是中国民间流传甚广且极具浪漫色彩的神话传说。</p>" +
            "<p>传说，从前有个贫苦善良的青年叫牛郎，他依靠哥嫂过活，常受哥嫂虐待，只有一头老牛相伴。而老牛并非普通的牛，它其实是天上的金牛星下凡，知晓许多事情。有一天，老牛突然开口告诉牛郎，他去湖边，就能遇到下凡洗澡的仙女，只要藏起其中一位仙女的衣裳，那位仙女就会成为他的妻子。</p>" +
            "<p>牛郎依言而行，果然在湖边看到了仙女们在洗澡，他悄悄藏起了织女的衣裳。织女发现衣裳不见，又羞又急，这时牛郎现身归还衣裳，并诚恳地表达了自己的心意，织女见牛郎憨厚老实，心生爱慕，便答应留下来做他的妻子。之后，牛郎织女男耕女织，过上了幸福美满的生活，还生下了一儿一女，一家人其乐融融。</p>" +
            "<p>然而，好景不长，王母娘娘得知了织女下凡与牛郎成婚的事，勃然大怒，派天兵天将下凡将织女捉回天庭。牛郎无法割舍对织女的感情，披上老牛死后留下的牛皮，用扁担挑着一双儿女追去。眼看就要追上织女了，王母娘娘拔下头上的金簪，在天空划出了一条波涛汹涌的银河，从此牛郎织女被银河隔开，只能隔河相望，难以相见。</p>" +
            "<p>他们坚贞的爱情感动了喜鹊，每年农历七月七日，无数喜鹊飞来，用身体搭成一道跨越天河的彩桥，让牛郎织女得以在桥上相会。这一天也就成了中国传统的七夕节，象征着爱情，寄托着人们对美好爱情的向往与期盼。</p> ",
        "videoId": "BV1f34y1X7DF"
    },
    "万户飞天": {
        "title": "万户飞天",
        "content": "<p>明朝官员万户是人类历史上第一个尝试用火箭飞天的人。</p>" +
            "<p>他将47支火箭绑在椅子上，手持风筝试图升空，虽失败但被国际公认为航天先驱。</p>" +
            "<p>万户的壮举不仅展现了中华民族对未知世界的探索勇气，更被载入国际航天史册，美国国家航空航天局将月球背面的一座环形山命名为“万户”以纪念他。</p>" +
            "<p>万户的故事激励着后人不断追求航天梦想，他的名字成为了人类挑战极限、探索宇宙的象征。</p>",
        "videoId": "BV1og411b7sp"
    },
    "敦煌飞天": {
        "title": "敦煌飞天",
        "content": "<p>敦煌莫高窟壁画中的飞天形象，是佛教文化与中原艺术的结合。</p>" +
            "<p>这些优美的飞天造型展现了古人对天空的想象和艺术创造力。</p>" +
            "<p>敦煌飞天从十六国时期开始出现，历经北魏、西魏、北周、隋、唐、五代、宋、西夏、元等朝代，历时千年，形成了独特的艺术风格。</p>" +
            "<p>飞天的形象不仅出现在壁画中，还见于彩塑、藻井图案等，其飘逸的姿态和灵动的线条，成为了中国艺术史上的瑰宝。</p>",
        "videoId": "BV1pT4y1d7tv"
    },
    "列子御风": {
        "title": "列子御风",
        "content": "<p>《列子·黄帝篇》记载列子能“御风而行”，泠然善也。</p>" +
            "<p>这一典故体现了道家对自由境界的追求和对飞行的幻想。</p>" +
            "<p>列子名御寇，是战国时期道家学派的代表人物之一，其思想强调顺应自然、无为而治。</p>" +
            "<p>列子御风的故事不仅是一个富有想象力的神话传说，更是道家哲学思想的生动体现，反映了古人对超越肉体束缚、实现精神自由的向往。</p>",
        "videoId": "BV1VsAWeREDZ&"
    },
    "萧史弄玉": {
        "title": "萧史弄玉",
        "content": "<p>传说春秋时期，萧史善吹箫，引来秦穆公之女弄玉爱慕。</p>" +
            "<p>两人婚后修道成仙，乘龙凤飞天而去，象征着古人对超脱尘世的向往。</p>" +
            "<p>萧史的箫声能引来凤凰，而弄玉则擅长吹笙，两人的音律相合，成为了一段千古佳话。</p>" +
            "<p>这个故事不仅展现了古代音乐的魅力，更表达了人们对美好爱情和超凡境界的追求，成为了中国文化中爱情与神仙传说的经典代表。</p>",
        "videoId": "BV16z4y127To"
    },
    "风筝": {
        "title": "风筝",
        "content": "<p>风筝是中国古代重要发明，最早可追溯至春秋时期，相传由墨翟研制。</p>" +
            "<p>古人用风筝进行测量、传递信息，甚至军事侦察，是人类飞行探索的早期实践。</p>" +
            "<p>最初的风筝被称为“木鸢”，是用木材制成的，后来逐渐改用纸张，称为“纸鸢”。</p>" +
            "<p>到了唐代，风筝成为了一种娱乐工具，深受人们喜爱。宋代以后，风筝的制作工艺更加精湛，种类也越来越多，成为了中国传统文化的重要组成部分。</p>",
        "videoId": "BV1qa4y1N7b4"
    },
    "火箭": {
        "title": "火箭",
        "content": "<p>中国古代发明的火药火箭，是现代火箭的雏形。</p>" +
            "<p>宋代开始将火箭用于军事，明代出现了多级火箭“火龙出水”，为航天技术奠定基础。</p>" +
            "<p>火药火箭的发明是中国古代四大发明之一，最早的记载可以追溯到北宋时期。</p>" +
            "<p>明代的“火龙出水”是一种两级火箭，它利用火箭燃烧喷射产生的反作用力推动箭体飞行，是现代多级火箭的先驱。</p>",
        "videoId": "BV1KZ4y1D7Zf"
    },
    "孔明灯": {
        "title": "孔明灯",
        "content": "<p>相传由三国时期诸葛亮（字孔明）发明，利用热空气上升原理制成。</p>" +
            "<p>孔明灯不仅是中国传统节庆用品，也被视为早期航空探索的尝试。</p>" +
            "<p>孔明灯通常由纸质灯罩和燃料组成，点燃燃料后，灯罩内的空气受热膨胀，密度减小，从而产生浮力使灯升空。</p>" +
            "<p>在中国传统节日中，人们常常放飞孔明灯，以祈求平安和幸福。如今，孔明灯已经成为了一种文化符号，被广泛应用于各种庆典和活动中。</p>",
        "videoId": "BV16u4y137a3"
    },
    "鲁班木鸢": {
        "title": "鲁班木鸢",
        "content": "<p>《墨子·鲁问》记载鲁班制作木鸢，“成而飞之，三日不下”。</p>" +
            "<p>这一传说反映了古代工匠对飞行器的探索和智慧。</p>" +
            "<p>鲁班是春秋时期鲁国的一位著名工匠，被尊为木匠祖师。他不仅擅长制作各种实用工具，还对飞行器进行了大胆的探索。</p>" +
            "<p>据记载，鲁班制作的木鸢能够在空中飞行三天三夜，虽然这一传说可能带有夸张的成分，但它充分体现了古代中国人对飞行的向往和探索精神。</p>",
        "videoId": "BV1R8411x7Zm"
    },
    "东方红一号": {
        "title": "东方红一号",
        "content": "<p>1970年4月24日，中国成功发射第一颗人造地球卫星“东方红一号”。</p>" +
            "<p>这标志着中国成为世界上第五个独立研制并发射人造卫星的国家，开启了中国航天新纪元。</p>" +
            "<p>东方红一号卫星重173公斤，直径约1米，采用72面体设计，表面布满了太阳能电池板。</p>" +
            "<p>卫星上搭载了一台音乐发生器，能够播放《东方红》乐曲，向全世界宣告中国进入了太空时代。东方红一号的成功发射，是中国航天事业发展的重要里程碑，为后续的航天探索奠定了坚实的基础。</p>",
        "videoId": "BV1Xh4y1m7qE"
    },
    "神舟五号": {
        "title": "神舟五号",
        "content": "<p>2003年10月15日，杨利伟乘坐神舟五号飞船进入太空。</p>" +
            "<p>这是中国首次载人航天飞行，使中国成为第三个独立掌握载人航天技术的国家。</p>" +
            "<p>神舟五号飞船由轨道舱、返回舱和推进舱三部分组成，全长8.86米，最大直径2.8米，总质量约7790公斤。</p>" +
            "<p>杨利伟在太空中飞行了21小时左右，绕地球飞行了14圈，完成了一系列科学实验和技术验证任务。神舟五号的成功发射和返回，标志着中国载人航天工程取得了历史性突破，实现了中华民族的千年飞天梦想。</p>",
        "videoId": "BV19841167FQ"
    },
    "嫦娥探月": {
        "title": "嫦娥探月",
        "content": "<p>2007年嫦娥一号成功发射，实现中国首次绕月探测。</p>" +
            "<p>后续嫦娥工程逐步实现月面软着陆、采样返回等目标，推动中国月球探测技术不断突破。</p>" +
            "<p>嫦娥工程是中国自主开展月球探测的重大战略工程，分为“绕、落、回”三个阶段。</p>" +
            "<p>2013年，嫦娥三号成功实现月面软着陆，玉兔号月球车开始在月面巡视探测；2020年，嫦娥五号成功完成月球采样返回任务，带回了1731克月球样品，标志着中国月球探测工程“绕、落、回”三步走战略圆满完成。</p>",
        "videoId": "BV1BK4y1L7m9"
    },
    "天问一号": {
        "title": "天问一号",
        "content": "<p>2020年7月23日，天问一号探测器发射升空，开启火星探测之旅。</p>" +
            "<p>2021年5月15日，祝融号火星车成功着陆火星，标志着中国首次火星探测任务取得圆满成功。</p>" +
            "<p>天问一号探测器由环绕器、着陆器和巡视器三部分组成，总质量约5吨。</p>" +
            "<p>祝融号火星车重约240公斤，搭载了6台科学载荷，将对火星的地形地貌、土壤特性、物质成分、水冰、大气、电离层、磁场等进行科学探测，为人类了解火星、探索宇宙作出中国贡献。</p>",
        "videoId": "BV1pT4y1j7u8"
    }
};    

const rocketData = {
    chang_e: {
        name: "嫦娥系列探测器",
        keywords: ["嫦娥奔月", "月球探测", "中国探月工程"],
        bvid: "BV1cx411Y7aM"
    },
    yu_tu: {
        name: "玉兔号月球车",
        keywords: ["玉兔", "月球车", "巡视探测"],
        bvid: "BV1eJ411R7Bb"
    },
    que_qiao: {
        name: "鹊桥中继星",
        keywords: ["鹊桥", "中继通信", "月球背面"],
        bvid: "BV1vN411R7Du"
    },
    tian_wen: {
        name: "天问系列",
        keywords: ["天问", "火星探测", "行星探测"],
        bvid: "BV19e411s7yT"
    },
    wu_kong: {
        name: "悟空号",
        keywords: ["悟空", "暗物质", "空间探测"],
        bvid: "BV1GB4y1K7oj"
    },
    zhu_rong: {
        name: "祝融号",
        keywords: ["祝融", "火星车", "火星探测"],
        bvid: "BV1xo4y1y7Nd"
    },
    space_spirit: {
        name: "中国航天精神",
        keywords: ["航天精神", "特别能吃苦", "特别能战斗", "特别能攻关", "特别能奉献"],
        bvid: "BV17g4y1R7uK"
    }
};

// 初始化函数
function init() {
    initPageSystem();
    initNavigation();
    initScrollEffects();
    initModals();
    initCharts();
    initStars();
}

document.addEventListener('DOMContentLoaded', init);

// 页面相关函数
function initPageSystem() {
    // 默认显示首页
    switchPage('home');
    
    // 首页探索按钮事件
    document.getElementById('explore-button').addEventListener('click', () => {
        switchPage('journey');
    });
    
    // 滚动事件监听
    window.addEventListener('scroll', handleScroll);
}

/**
 *  页面切换函数
 * @param {string} page - 要显示的页面ID（不带-page后缀）
 */
function switchPage(page) {
    const loadingAnimation = document.getElementById('loading-animation');
    
    // 显示加载动画
    loadingAnimation.classList.add('active');
    
    setTimeout(() => {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        
        // 显示目标页面
        document.getElementById(`${page}-page`).classList.add('active');
        
        // 滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // 如果是数据页，重新渲染图表
        if (page === 'data') {
            setTimeout(() => {
                if (window.budgetChart) window.budgetChart.resize();
                if (window.mannedChart) window.mannedChart.resize();
                
                // 强制Canvas图表重绘
                const charts = Chart.instances;
                for (let i = 0; i < charts.length; i++) {
                    charts[i].resize();
                }
            }, 300);
        }
        
        // 隐藏加载动画
        loadingAnimation.classList.remove('active');
    }, 300);
}

/**
 * 处理页面滚动事件
 */
function handleScroll() {
    const backToTop = document.getElementById('back-to-top');
    backToTop.classList.toggle('visible', window.scrollY > 500);
}

/**
 * 初始化导航相关功能
 */
function initNavigation() {
    const lampPull = document.getElementById('lamp-pull');
    const lampMenu = document.getElementById('lamp-menu');
    
    // 台灯拉绳点击事件
    lampPull.addEventListener('click', function(e) {
        e.stopPropagation();
        lampMenu.classList.toggle('active');
    });
    
    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(e) {
        if (!lampPull.contains(e.target)) {
            lampMenu.classList.remove('active');
        }
    });
    
    // 菜单链接点击事件
    document.querySelectorAll('.lamp-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            lampMenu.classList.remove('active');
            switchPage(page);
            e.stopPropagation();
        });
    });
    
    // 移动端菜单切换
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
    
    // 返回顶部按钮
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 切换移动端菜单显示状态
 */
function toggleMobileMenu() {
    document.getElementById('lamp-menu').classList.toggle('active');
}

/**
 * 初始化所有卷轴和时间轴效果
 */
function initScrollEffects() {
    initScrollBoxes();
    initTimeline();
    initImageClickEvents();
}

/**
 * 初始化卷轴交互效果
 */
function initScrollBoxes() {
    const scrollBoxes = document.querySelectorAll('.scroll-box');
    
    scrollBoxes.forEach(scrollBox => {
        const rightScroll = scrollBox.querySelector('.scroll-handle.right');
        
        // 关闭卷轴的函数
        const collapseScroll = (e) => {
            e.stopPropagation();
            if (scrollBox.classList.contains('expanded')) {
                scrollBox.classList.remove('expanded');
                scrollBox.classList.add('collapsed');
                scrollBox.style.zIndex = 1;
                scrollBoxes.forEach(box => box.classList.remove('hidden'));
            }
        };
        
        // 手柄点击事件
        rightScroll.addEventListener('click', collapseScroll);
        
        // 阻止卷轴背景点击事件
        scrollBox.addEventListener('click', (e) => {
            e.stopPropagation();
            return false;
        });
        
        scrollBox.style.cursor = 'default';
    });
}

/**
 * 初始化时间轴交互效果
 */
function initTimeline() {
    // 获取时间点和时间段元素
    const mythPoint = document.getElementById('mythPoint');
    const storyPoint = document.getElementById('storyPoint');
    const inventionPoint = document.getElementById('inventionPoint');
    const modernPoint = document.getElementById('modernPoint');
    
    const mythPeriod = document.getElementById('mythPeriod');
    const storyPeriod = document.getElementById('storyPeriod');
    const inventionPeriod = document.getElementById('inventionPeriod');
    const modernPeriod = document.getElementById('modernPeriod');
    
    // 获取对应的卷轴元素
    const mythScroll = document.getElementById('mythScroll');
    const storyScroll = document.getElementById('storyScroll');
    const inventionScroll = document.getElementById('inventionScroll');
    const modernScroll = document.getElementById('modernScroll');
    
    // 绑定点击事件
    mythPoint.addEventListener('click', () => toggleScrollBox(mythScroll));
    storyPoint.addEventListener('click', () => toggleScrollBox(storyScroll));
    inventionPoint.addEventListener('click', () => toggleScrollBox(inventionScroll));
    modernPoint.addEventListener('click', () => toggleScrollBox(modernScroll));
    
    mythPeriod.addEventListener('click', () => toggleScrollBox(mythScroll));
    storyPeriod.addEventListener('click', () => toggleScrollBox(storyScroll));
    inventionPeriod.addEventListener('click', () => toggleScrollBox(inventionScroll));
    modernPeriod.addEventListener('click', () => toggleScrollBox(modernScroll));
    
    /**
     * 切换卷轴显示状态
     * @param {HTMLElement|string} scrollBox - 卷轴元素或ID
     */
    function toggleScrollBox(scrollBox) {
        if (typeof scrollBox === 'string') {
            scrollBox = document.getElementById(scrollBox);
        }
        
        if (scrollBox.classList.contains('expanded')) return;
        
        // 收起所有卷轴
        document.querySelectorAll('.scroll-box').forEach(box => {
            box.classList.remove('expanded');
            box.classList.add('collapsed');
            box.style.zIndex = 1;
        });
        
        // 显示所有卷轴
        document.querySelectorAll('.scroll-box').forEach(box => {
            box.classList.remove('hidden');
        });
        
        // 展开当前卷轴
        scrollBox.classList.remove('collapsed');
        scrollBox.classList.add('expanded');
        scrollBox.style.zIndex = 3;
        
        // 更新时间点激活状态
        updateActivePoint(scrollBox.id);
        
        // 滚动到卷轴位置
        setTimeout(() => {
            scrollBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
    
    /**
     * 更新时间点激活状态
     * @param {string} scrollId - 卷轴元素ID
     */
    function updateActivePoint(scrollId) {
        document.querySelectorAll('.timeline-point').forEach(point => {
            point.classList.remove('active');
        });
        
        switch(scrollId) {
            case 'mythScroll':
                mythPoint.classList.add('active');
                break;
            case 'storyScroll':
                storyPoint.classList.add('active');
                break;
            case 'inventionScroll':
                inventionPoint.classList.add('active');
                break;
            case 'modernScroll':
                modernPoint.classList.add('active');
                break;
        }
    }
}

/**
 * 初始化图片点击事件
 */
function initImageClickEvents() {
    document.querySelectorAll('.scroll-item img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const altText = this.alt;
            const content = modalContents[altText];
            
            if (content) {
                showModal(content.title, content.videoId || null, content.content);
            } else {
                // 默认内容回退
                const item = this.closest('.scroll-item');
                const defaultContent = Array.from(item.querySelectorAll('p'))
                    .map(p => p.textContent)
                    .join('<br><br>');
                showModal(altText, this.src, defaultContent);
                console.warn(`没有找到"${altText}"的定制内容，使用默认描述`);
            }
        });
    });
}

/**
 * 初始化所有模态窗口相关功能
 */
function initModals() {
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModal = document.getElementById('close-modal');
    
    // 火箭卡片点击事件
    document.querySelectorAll('.rocket-card').forEach(card => {
        card.addEventListener('click', function() {
            const rocketType = this.getAttribute('data-rocket');
            showRocketDetail(rocketType);
        });
    });
    
    // 关闭按钮事件
    closeModal.addEventListener('click', closeModalWindow);
    
    // 点击遮罩层关闭
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalWindow();
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModalWindow();
        }
    });
}

/**
 * 显示通用模态窗口
 * @param {string} title - 模态窗口标题
 * @param {string} imageSrc - 图片URL
 * @param {string} content - HTML内容
 */
 function showModal(title, videoId, content) {
    const modal = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${title}</h2>
        ${videoId ? `
            <div class="video-container">
                <iframe src="https://player.bilibili.com/player.html?bvid=${videoId}&high_quality=1"
                        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen>
                </iframe>
            </div>` : ''}
        <div class="text-content">${content}</div>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

/**
 * 显示火箭详情模态窗口
 * @param {string} rocketType - 火箭类型标识符
 */
function showRocketDetail(rocketType) {
    const rocketInfo = rocketData[rocketType] || rocketData.chang_e;
    
    const modalContent = `
        <div class="rocket-modal-content">
            <div class="video-container">
                <iframe src="http://player.bilibili.com/player.html?isOutside=true&bvid=${rocketInfo.bvid}&high_quality=1&danmaku=0" 
                        scrolling="no" 
                        border="0" 
                        frameborder="no" 
                        framespacing="0" 
                        allowfullscreen="true"
                        style="width:100%; height:400px; border-radius:8px;">
                </iframe>
            </div>
            <div class="ai-section">
                <h3><i class="fas fa-robot"></i> AI 讲解员</h3>
                <div class="ai-response">
                    <div class="ai-loading">
                        <div class="loading-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <p>AI 正在生成讲解内容...</p>
                    </div>
                    <div class="ai-message" style="display:none;"></div>
                </div>
                <button class="voice-button" id="voice-button" style="display:none;">
                    <i class="fas fa-volume-up"></i> 语音播放
                </button>
            </div>
        </div>
    `;
    
    showModal(rocketInfo.name, '', modalContent);
    generateAIExplanation(rocketInfo);
}

/**
 * 关闭模态窗口
 */
function closeModalWindow() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.classList.remove('modal-open');
}


/**
 * 初始化数据可视化图表
 * @param {boolean} forceRender - 是否强制立即渲染
 */
function initCharts(forceRender = false) {
    const apiUrl = 'http://wangxui119.natapp1.cc/cluster';
    
    if (document.getElementById('data-page').classList.contains('active') || forceRender) {
        renderCharts();
    } else {
        document.querySelectorAll('.lamp-link[data-page="data"]').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(renderCharts, 400);
            });
        });
    }
    
    /**
     * 获取图表数据
     */
    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`网络响应异常: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('请求数据时出错:', error);
            return null;
        }
    }
    
    /**
     * 渲染图表
     */
    async function renderCharts() {
        const data = await fetchData();
        if (!data) return;
        
        const countries = ['中国', '美国', '俄罗斯'];
        const pieData = [];
        const barData = [];
        
        countries.forEach(country => {
            const clusterCenters = data[country];
            if (Array.isArray(clusterCenters)) {
                clusterCenters.forEach((center, index) => {
                    if (Array.isArray(center) && center.length > 0) {
                        pieData.push({
                            value: center[0],
                            name: `${country} 聚类 ${index + 1}`
                        });
                        barData.push({
                            country: country,
                            cluster: `聚类 ${index + 1}`,
                            value: center[0]
                        });
                    }
                });
            }
        });
        
        // 初始化饼图
        const pieChart = echarts.init(document.getElementById('pieChart'));
        pieChart.setOption({
            title: { text: '中美俄火箭发射数量聚类结果饼状图', left: 'center' },
            tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
            legend: { orient: 'vertical', right: 10, top: 'center' },
            series: [{
                name: '聚类中心值',
                type: 'pie',
                radius: ['50%', '80%'],
                data: pieData,
                itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                label: { show: false },
                emphasis: { label: { show: true, fontSize: '14', fontWeight: 'bold' } },
                labelLine: { show: false }
            }]
        });
        
        // 初始化柱状图
        const barChart = echarts.init(document.getElementById('barChart'));
        barChart.setOption({
            title: { text: '中美俄火箭发射数量聚类结果柱状图', left: 'center' },
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { top: '20%', right: '10%', bottom: '15%', left: '10%' },
            xAxis: {
                type: 'category',
                data: barData.map(item => `${item.country}\n${item.cluster}`),
                axisLabel: { interval: 0, rotate: 0 }
            },
            yAxis: { type: 'value', name: '聚类中心值' },
            series: [{
                name: '聚类中心值',
                type: 'bar',
                barWidth: '60%',
                data: barData.map(item => item.value),
                itemStyle: {
                    color: function(params) {
                        const colorList = ['#c23531', '#2f4554', '#61a0a8'];
                        return colorList[params.dataIndex % colorList.length];
                    }
                }
            }]
        });
        
        // 响应式调整
        window.addEventListener('resize', function() {
            pieChart.resize();
            barChart.resize();
        });
    }
}

/**
 * 生成AI讲解内容
 * @param {object} rocketInfo - 火箭信息对象
 */
async function generateAIExplanation(rocketInfo) {
    const loadingEl = document.querySelector('.ai-loading');
    const messageEl = document.querySelector('.ai-message');
    const voiceButton = document.getElementById('voice-button');
    
    // 显示加载状态
    loadingEl.style.display = 'block';
    messageEl.style.display = 'none';
    voiceButton.style.display = 'none';
    
    try {
        const response = await fetch(
            `http://wangxui119.natapp1.cc/deepseek?word=${encodeURIComponent(rocketInfo.name)}`, 
            { method: 'GET', headers: { 'Accept': 'application/json' } }
        );
        
        if (!response.ok) throw new Error(`请求失败: ${response.status}`);
        
        const data = await response.json();
        const resultText = data.result || data.error || "未获取到有效内容";
        
        // 显示结果
        loadingEl.style.display = 'none';
        messageEl.style.display = 'block';
        messageEl.innerHTML = `<p>${resultText}</p>`;
        
        // 启用语音朗读
        voiceButton.style.display = 'block';
        initVoiceButton(resultText);
        
    } catch (error) {
        console.error("AI讲解生成失败:", error);
        
        // 显示错误信息
        loadingEl.style.display = 'none';
        messageEl.style.display = 'block';
        messageEl.innerHTML = `
            <p style="color: #ff4444;">AI讲解生成失败: ${error.message}</p>
            <p>${rocketInfo.name} 是中国航天的重要成就之一，源自 ${rocketInfo.keywords?.join('、') || '中国传统神话'}。</p>
        `;
        
        voiceButton.style.display = 'block';
        initVoiceButton(messageEl.textContent);
    }
}

/**
 * 初始化语音朗读功能
 * @param {string} text - 要朗读的文本
 */
function initVoiceButton(text) {
    const voiceButton = document.getElementById('voice-button');
    if (!voiceButton) return;
    
    let speech = null;
    
    voiceButton.addEventListener('click', () => {
        if (speech && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            voiceButton.innerHTML = '<i class="fas fa-volume-up"></i> 语音播放';
        } else {
            speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'zh-CN';
            speech.rate = 0.9;
            window.speechSynthesis.speak(speech);
            voiceButton.innerHTML = '<i class="fas fa-stop"></i> 停止播放';
            
            speech.onend = () => {
                voiceButton.innerHTML = '<i class="fas fa-volume-up"></i> 语音播放';
            };
        }
    });
}