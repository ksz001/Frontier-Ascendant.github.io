// 中国地理边界
const CHINA_BOUNDS = {
    minLng: 73.66,
    maxLng: 135.08,
    minLat: 3.86,
    maxLat: 53.52
};
// 颜色映射
const COLOR_MAP = {
    '嫦娥奔月': '#e74c3c',
    '后羿射日': '#3498db',
    '女娲补天': '#2ecc71',
    '牛郎织女': '#9b59b6',
    '鲁班木鸢': '#f1c40f',
    '敦煌飞天': '#e67e22',
    '万户飞天': '#1abc9c',
    '列子御风': '#e84393',
    '萧史弄玉': '#7f8c8d',
    '风筝起源': '#d35400',
    '孔明灯': '#2c3e50',
    '古代火箭': '#8e44ad'
};
// 数据预处理
function processData(rawData) {
    return rawData.flatMap(item => {
        return Object.keys(item)
           .filter(key => key.endsWith('.起源地'))
           .map(key => {
                const prefix = key.split('.')[0];
                return {
                    story: prefix,
                    origin: item[key],
                    lng: parseFloat(item[`${prefix}.经度`]),
                    lat: parseFloat(item[`${prefix}.纬度`])
                };
            });
    }).filter(point => !isNaN(point.lng) && !isNaN(point.lat));
}

// 创建图例
function createLegend() {
    const legend = document.getElementById('legend');
    legend.innerHTML = Object.entries(COLOR_MAP)
       .map(([name, color]) => `
            <div class="legend-item">
                <div class="legend-color" style="background:${color}"></div>
                <span>${name}</span>
            </div>
        `).join('');
}

// 渲染点
function renderPoints(data) {
    const map = new AMap.Map('map', {
        // 设置地图中心点
        center: [110, 36.5],
        // 设置地图级别
        zoom: 4,
        // 设置为卫星地图模式
        mapStyle: 'amap://styles/27f9187309c59c49c7021c5951057c84' // 卫星地图样式
    });

    data.forEach(point => {
        const marker = new AMap.Marker({
            position: [point.lng, point.lat],
            icon: new AMap.Icon({
                size: new AMap.Size(12, 12),
                image: (function () {
                    const canvas = document.createElement('canvas');
                    canvas.width = 12;
                    canvas.height = 12;
                    const ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.arc(6, 6, 6, 0, 2 * Math.PI);
                    ctx.fillStyle = COLOR_MAP[point.story];
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'white';
                    ctx.stroke();
                    return canvas.toDataURL('image/png');
                })(),
                offset: new AMap.Pixel(-6, -6)
            }),
            cursor: 'pointer'
        });
        marker.setMap(map);

        const infoWindow = new AMap.InfoWindow({
            content: `
                <div class="font-semibold">${point.story}</div>
                <div>起源地：${point.origin}</div>
                <div>坐标：${point.lng.toFixed(2)}, ${point.lat.toFixed(2)}</div>
            `,
            offset: new AMap.Pixel(0, -30)
        });

        marker.on('click', function () {
            infoWindow.open(map, marker.getPosition());
        });
    });
}

// 初始化
async function init() {
    // 坐标数据
    const rawData = [
        {
            "嫦娥奔月.起源地": "古代苏北地区",
            "嫦娥奔月.经度": 117.00,
            "嫦娥奔月.纬度": 31.00,
            "后羿射日.起源地": "古代苏北地区",
            "后羿射日.经度": 118.00,
            "后羿射日.纬度": 32.00,
            "女娲补天.起源地": "河北涉县中皇山",
            "女娲补天.经度": 113.66,
            "女娲补天.纬度": 36.56,
            "牛郎织女.起源地": "山东沂源",
            "牛郎织女.经度": 118.18,
            "牛郎织女.纬度": 36.10,
            "鲁班木鸢.起源地": "战国时期鲁国",
            "鲁班木鸢.经度": 117.17,
            "鲁班木鸢.纬度": 35.09,
            "敦煌飞天.起源地": "甘肃敦煌",
            "敦煌飞天.经度": 94.71,
            "敦煌飞天.纬度": 40.10,
            "万户飞天.起源地": "元末浙江省金华县",
            "万户飞天.经度": 119.64,
            "万户飞天.纬度": 29.11,
            "列子御风.起源地": "战国时期郑国",
            "列子御风.经度": 113.70,
            "列子御风.纬度": 34.75,
            "萧史弄玉.起源地": "南昌萧峰",
            "萧史弄玉.经度": 115.70,
            "萧史弄玉.纬度": 28.80,
            "风筝.起源地": "山东潍坊",
            "风筝.经度": 119.10,
            "风筝.纬度": 36.62,
            "孔明灯.起源地": "蜀汉时期四川",
            "孔明灯.经度": 104.04,
            "孔明灯.纬度": 30.57,
            "古代火箭.起源地": "北宋时期河南",
            "古代火箭.经度": 114.35,
            "古代火箭.纬度": 34.79
        }
    ];
    const processedData = processData(rawData);
    createLegend();
    renderPoints(processedData);

    // 添加关闭按钮事件
    document.getElementById('closeBtn').addEventListener('click', function () {
        window.location.href = '飞天寻梦.html';
    });

    // 窗口大小自适应
    const debounce = (fn, delay) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(fn, delay);
        };
    };
    window.addEventListener('resize', debounce(() => {
        const map = new AMap.Map('map');
        map.clearMap();
        renderPoints(processedData);
    }, 300));
}
init();