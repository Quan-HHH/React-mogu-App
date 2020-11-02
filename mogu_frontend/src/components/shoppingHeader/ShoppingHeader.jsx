import React from 'react';
import './shoppingHeader.css'
function ShoppingHeader() {
    return (
        <div className="shopping-top">
            <div className="icon-wrap left">
                <span className="icon iconfont">&#xe681;</span>
                <span className="title">分类</span>
            </div>
            <input className="icon iconfont" type="text" name="" id="" placeholder="&#xe608;  外套"/>
            <div className="icon-wrap right">
                <span className="icon iconfont">&#xe62f;</span>
                <span className="title">购物车</span>
            </div>
        </div>
    )
}

export default ShoppingHeader;