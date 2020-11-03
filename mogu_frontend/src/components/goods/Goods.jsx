import React from 'react'
import LazyLoad from 'react-lazyload'
import './goods.css'

function Goods(props) {
    const { img, title, stars, price, oriPrice } = props;
    return (
        <div className="goods-item">
            <div className="good-item-img">
                <LazyLoad
                    scroll={true}
                    placeholder={<img
                        width="100%" height="100%"
                        src="https://s10.mogucdn.com/mlcdn/c45406/200521_5k8j79hg5c84bfhgcc27a666d61c9_250x250.jpg" alt="logo" />}>
                    <img src={img} alt="" />
                </LazyLoad>
            </div>
            <div className="goods-item-info">
                <div className="goods-item-info-title">{title}</div>
                <div className="goods-item-info-price">
                    <div className="price">￥{price}</div>
                    <div className="star">
                        {stars}
                        <span className="icon iconfont"> &#xe647;</span>
                    </div>
                </div>
                <div className="buy-button">立即购买</div>
            </div>
        </div>
    )
}

export default Goods;