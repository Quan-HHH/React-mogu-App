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
                    iconItem.tab1.map((item, i) => (
                        <IconItem key={item.id} iconCode={item.iconCode} title={item.title} />
                    )
                    )
                }
            </div>
            <div className="my-cart-wrap">
                <div className="my-cart-img">
                    <span>购物车</span>
                    <span className="icon iconfont">0件商品&#xe610;</span>
                    
                </div>
                <div className="my-cart-info">

                </div>
            </div>
        </div>
    )
}

export default My;