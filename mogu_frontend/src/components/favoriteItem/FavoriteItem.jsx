import React from 'react';
import './favoriteItem.css'

function FavoriteItem(props) {
    const { img, title, stars, price } = props;
    // console.log(props, '--------------')
    return (
        <div className="favorite-item-wrap">
            <div className="favorite-item-img">
                <img src={img} alt=""/>
            </div>
            <div className="favorite-item-info">
                <div className="favorite-item-desc">{title}</div>
                <div className="favorite-item-collect-num">{stars}人收藏</div>
                <div className="favorite-item-price">￥{price.toFixed(2)}</div>
                <div className="find-more">
                    <span>找同款</span>
                    <span>找相似</span>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem;