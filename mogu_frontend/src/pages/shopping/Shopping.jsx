import React, { useEffect } from 'react';
import ShoppingHeader from '../../components/shoppingHeader/ShoppingHeader'
import { connect } from 'react-redux'
import { getShoppingDataList_AC } from './store/actionCreators'
import ModBlock from '@/components/modBlock/ModBlock'
import ResItem from '@/components/resItem/ResItem'
import Goods from '@/components/goods/Goods'
import './shopping.css'


function Shopping(props) {
    const { getShoppingDataList, shoppingTopDataList, shoppingMidDataList, shoppingCommodityDataList } = props;
    useEffect(() => {
        getShoppingDataList();
        // console.log(11111111111)
    }, [])
    // console.log('asd',shoppingTopDataList, shoppingMidDataList, shoppingCommodityDataList)
    return (
        <div className="shopping">
            <ShoppingHeader />
            <div className="module_row_top">
                {
                    shoppingTopDataList.map((item, i) => (
                        <ModBlock key={i} title={item.title} img={item.img} />
                    ))
                }
            </div>
            <div className="module_row_mid">
                <div className="module_row_mid_outer">
                    {
                        shoppingMidDataList.map((item, i) => (
                            <ResItem key={i} title={item.title} imgSrc={item.img} width={12.5} />
                        ))
                    }
                </div>
            </div>
            <div className="pit-img">
                <img src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png" alt=""/>
            </div>
            <div className="mod-goods-list">
                {
                    shoppingCommodityDataList.map(item => {
                        return (
                            <Goods key={item.id} id={item.id} img={item.img} title={item.title} stars={item.stars} price={item.price} oriPrice={item.oriPrice} collect={item.collect} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shoppingTopDataList: state.getIn(['shopping', 'shoppingTopDataList']).toJS(),
        shoppingMidDataList: state.getIn(['shopping', 'shoppingMidDataList']).toJS(),
        shoppingCommodityDataList: state.getIn(['shopping', 'shoppingCommodityDataList']).toJS(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShoppingDataList: () => {
            console.log(123213132123132)
            dispatch(getShoppingDataList_AC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);