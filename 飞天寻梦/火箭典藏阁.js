const videoData = {
    '火龙出水': 'video/火龙出水.mp4',
    '神火飞鸦': 'video/神火飞鸦.mp4',
    '飞天砂筒': 'video/飞天砂筒.mp4',
    '震天雷炮': 'video/震天雷炮.mp4'
};

document.querySelectorAll('.ancient-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const title = this.closest('.book-back').previousElementSibling
            .querySelector('.book-title').textContent;

        const videoPlayer = document.getElementById('detail-video');
        videoPlayer.src = videoData[title];
        videoPlayer.load();

        document.getElementById('overlay').style.display = 'block';
        document.getElementById('videoModal').style.display = 'block';
    });
});

document.querySelector('.modal-close-btn').addEventListener('click', () => {
    const videoPlayer = document.getElementById('detail-video');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('videoModal').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', () => {
    document.querySelector('.modal-close-btn').click();
});

const myChart = echarts.init(document.getElementById('topology-container'));
const option = {
    tooltip: {},
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 50,
        roam: true,
        label: { show: true },
        force: { repulsion: 1000 },
        data: [
            { name: '爆竹', itemStyle: { color: '#d55630' } },
            { name: '火龙出水', itemStyle: { color: '#c5a880' } },
            { name: '神火飞鸦', itemStyle: { color: '#c5a880' } },
            { name: '飞天砂筒', itemStyle: { color: '#c5a880' } },
            { name: '震天雷', itemStyle: { color: '#c5a880' } },
            { name: '一窝蜂', itemStyle: { color: '#c5a880' } },
            { name: '万户飞天', itemStyle: { color: '#dfdad4' } },
            { name: '现代火箭', itemStyle: { color: '#a69f9b' } },
            { name: '载人飞船', itemStyle: { color: '#635f5d' } },
            { name: '空间站', itemStyle: { color: '#605c5a' } }
        ],
        links: [
            { source: '爆竹', target: '火龙出水' },
            { source: '爆竹', target: '神火飞鸦' },
            { source: '爆竹', target: '飞天砂筒' },
            { source: '爆竹', target: '震天雷' },
            { source: '爆竹', target: '一窝蜂' },
            { source: '火龙出水', target: '万户飞天' },
            { source: '火龙出水', target: '现代火箭' },
            { source: '万户飞天', target: '现代火箭' },
            { source: '现代火箭', target: '载人飞船' },
            { source: '现代火箭', target: '空间站' }
        ]
    }]
};
myChart.setOption(option);
window.addEventListener('resize', () => myChart.resize());

// 返回按钮事件
document.getElementById('returnBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = '飞天寻梦.html';
});