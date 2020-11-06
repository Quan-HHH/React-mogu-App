import React from 'react'
import LazyLoad from 'react-lazyload'
import './goods.css'
import { connect } from 'react-redux';
import { changeGoodsIsCollect_AC, changeGoodsUnCollect_AC } from '@/pages/shopping/store/actionCreators'
import { NavLink, Prompt } from 'react-router-dom';

function Goods(props) {
    const { id, img, title, stars, collect, price, oriPrice } = props;
    const { handleGoodsIsCollect, handleGoodsUnCollect } = props;
    console.log(collect)
    return (
        <NavLink to={`/shopping/${id}`}>
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
                            <Prompt message={() => {}} />
                            {stars}
                            <span className="icon iconfont"
                                dangerouslySetInnerHTML={{ __html: collect ? "&#xe605;" : " &#xe647;" }}
                                style={{ color: collect ? "#ff5777" : "" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    collect ?
                                        handleGoodsUnCollect(id) :
                                        handleGoodsIsCollect(id)
                                }}
                            ></span>
                        </div>
                    </div>
                    <div className="buy-button">立即购买</div>
                </div>
            </div>
        </NavLink>

    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 收藏
        handleGoodsIsCollect: (id) => {
            dispatch(changeGoodsIsCollect_AC(id))
        },
        // 取消收藏
        handleGoodsUnCollect: (id) => {
            dispatch(changeGoodsUnCollect_AC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goods);