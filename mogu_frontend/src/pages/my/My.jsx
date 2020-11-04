import React from 'react';
import './my.css'
import { iconItem } from '@/api/config'
import IconItem from '../../components/iconItem/IconItem';
// import connect from 'react-redux'

function My() {
    // console.log(cartPNG)
    return (
        <div className="my">
            <div className="account-info">
                <div className="avatar-img">
                    <img src="/avatar.JPG" alt="" />
                </div>
                <div className="account-name">
                    <p className="name">一个电插销</p>
                    {/* <p className="account-medal"> */}
                    <span className="icon iconfont account-medal">&#xe662;粉丝勋章</span>
                    {/* </p> */}
                    <span className="icon iconfont account-medal">&#xe609;成就勋章</span>
                </div>
                <div className="member-center">
                    <span className="icon iconfont">会员中心&#xe610;</span>
                </div>
            </div>

            <div className="my-icon-tab1">
                {
                    iconItem.tab1.map(item => (
                        <IconItem key={item.id} iconCode={item.iconCode} title={item.title} />
                    )
                    )
                }
            </div>
            <div className="my-cart-wrap">
                <div className="my-cart-wrap-box">
                    <div className="my-cart-img">
                        <span>购物车</span>
                        <span className="icon iconfont">0件商品&#xe610;</span>
                    </div>
                </div>
                <div className="card-voucher-box">
                    <li>
                        <span>卡券红包</span>
                        <span className="icon iconfont">6张活动券&#xe610;</span>
                    </li>
                    <li>
                        <span>补贴保障</span>
                        <span className="icon iconfont">退货补运费&#xe610;</span>
                    </li>
                    <li>
                        <span>我的钱包</span>
                        <span className="icon iconfont">查看白付美&#xe610;</span>
                    </li>
                </div>
            </div>
            <div className="my-order-wrap">
                <div className="my-order-box-title">
                    <span>我的订单</span>
                    <span className="icon iconfont">全部&#xe610;</span>
                </div>
                <div className="my-icon-tab2">
                    {
                        iconItem.tab2.map(item => (
                            <IconItem key={item.id} iconCode={item.iconCode} title={item.title} />
                        )
                        )
                    }
                </div>
            </div>
            <div className="my-order-wrap">
                <div className="my-order-box-title">
                    <span>我的工具</span>
                </div>
                <div className="my-icon-tab3">
                    {
                        iconItem.tab3.map(item => (
                            <IconItem key={item.id} iconCode={item.iconCode} title={item.title} />
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default My;