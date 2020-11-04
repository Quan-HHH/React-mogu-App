import axios from 'axios'

export const baseUrl = "http://localhost:8080/api";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '获取数据失败')
    }
)

export { axiosInstance }

export const iconItem = {
    tab1: [
        {
            id: 1,
            iconCode: '&#xe635;',
            title: '个人主页',
        },{
            id: 2,
            iconCode: '&#xe626;',
            title: '我的直播',
        },{
            id: 3,
            iconCode: '&#xe647;',
            title: '收藏',
        },{
            id: 4,
            iconCode: '&#xe611;',
            title: '关注',
        },{
            id: 5,
            iconCode: '&#xe6a7;',
            title: '足迹',
        }
    ],
    tab2: [
        {
            id: 1,
            iconCode: '&#xe685;',
            title: '待付款',
        },{
            id: 2,
            iconCode: '&#xe607;',
            title: '待发货',
        },{
            id: 3,
            iconCode: '&#xe736;',
            title: '待收货',
        },{
            id: 4,
            iconCode: '&#xe6b6;',
            title: '评价',
        },{
            id: 5,
            iconCode: '&#xe613;',
            title: '退款售后',
        }
    ],
    tab3: [
        {
            id: 1,
            iconCode: '&#xe604;',
            title: '签到换券',
        },{
            id: 2,
            iconCode: '&#xe603;',
            title: 'LOOK中心',
        },{
            id: 3,
            iconCode: '&#xe60e;',
            title: '美丽借',
        },{
            id: 4,
            iconCode: '&#xe6da;',
            title: '客服',
        },{
            id: 5,
            iconCode: '&#xe62b;',
            title: '大姨妈',
        },
        {
            id: 6,
            iconCode: '&#xe600;',
            title: '蘑力测肤',
        },{
            id: 7,
            iconCode: '&#xe648;',
            title: '星座',
        },{
            id: 8,
            iconCode: '&#xe617;',
            title: '主播入驻',
        },{
            id: 9,
            iconCode: '&#xe683;',
            title: '我的福利',
        },{
            id: 10,
            iconCode: '&#xe60f;',
            title: '设置',
        }
    ]
}