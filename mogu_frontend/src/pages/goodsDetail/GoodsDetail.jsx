import React from 'react';
import './goodDetail.css'
import Header from '@/components/header/Header'
import { connect } from 'react-redux'
import Footer from '@/components/detailFooter/DetailFooter'


function GoodsDetail(props) {
    const { goodsDetailDataList } = props;
    let id = props.match.params.id
    let goodsDetailData = goodsDetailDataList.filter(item => {
        return item.id === id;
    })
    console.log(goodsDetailData)
    const { img, collect, oriPrice, price, title } = goodsDetailData[0];
    console.log(242432432423423)
    return (
        <div className="goods-detail-wrap">
            <Header iconLeft="&#xe60b;" title="" iconRight="&#xe7b9;" />
            <div className="goods-detail-img">
                <img src={img} alt=""/>
            </div>
            <div className="goods-detail-price">
                <span>￥</span>
                <span>{price.toFixed(2)}</span>
                <span>￥{oriPrice.toFixed(2)}</span>
                {/* <span>{(price * 10 / oriPrice).toFixed(1)}折</span> */}
            </div>
            <div className="goods-detail-desc">
                <div className="goods-detail-title">{title}</div>
                <span className="icon iconfont">&#xe60a;帮我选</span>
            </div>
            <div className="goods-detail-send">
                <span>免邮费</span>
                <span>广东广州</span>
            </div>
            <img className="goods-detail-activity-img" src="https://s5.mogucdn.com/mlcdn/c45406/201023_09c1gf9801j1614l12c1fkb5a790j_750x76.png" alt=""/>
            <div className="goods-detail-service">
                <div className="goods-detail-service-item">
                    <span className="icon iconfont">&#xed8d;</span>
                    <span>72小时发货</span>
                </div>
                <div className="goods-detail-service-item">
                    <span className="icon iconfont">&#xed8d;</span>
                    <span>7天无理由退货</span>
                </div>
                <div className="goods-detail-service-item">
                    <span className="icon iconfont">&#xed8d;</span> 
                    <span>延误必赔</span>
                </div>
            </div>
            <Footer collect={collect} />
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        goodsDetailDataList: state.getIn(['shopping', 'shoppingCommodityDataList']).toJS()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail);