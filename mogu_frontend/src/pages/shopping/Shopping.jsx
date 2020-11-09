import React, { useEffect, memo, useRef } from 'react';
import ShoppingHeader from '../../components/shoppingHeader/ShoppingHeader'
import { connect } from 'react-redux'
import { getShoppingDataList_AC, getMoreCommodityData_AC } from './store/actionCreators'
import Goods from '@/components/goods/Goods'
import './shopping.css'
import { renderRoutes } from 'react-router-config';
import Scroll from '../../common/scroll/Scroll'
import { forceCheck } from 'react-lazyload'
import ShoppingClassify from '@/components/shoppingClassify/ShoppingClassify'


function Shopping(props) {
    const { shoppingCommodityDataList } = props;
    const { getShoppingDataList, getMoreCommodityData } = props;
    // console.log(shoppingTopDataList, shoppingMidDataList, '99------------')
    useEffect(() => {
        if (!shoppingCommodityDataList.length) {
            getShoppingDataList();
        }
    }, [])
    // console.log('asd',shoppingTopDataList, shoppingMidDataList, shoppingCommodityDataList)
    // useEffect(() => {
    //     // console.log(bsRef.current)
    //     const scroll = new BScroll(bsRef.current, {
    //         scrollY: true,
    //         click: true,
    //         scrollX: true
    //     })
    //     // console.log(scroll)
    // }, [])
    return (
        <div className="shopping">
            <ShoppingHeader />
            <Scroll
                pullUp={
                    () => {
                        console.log(123)
                        getMoreCommodityData(shoppingCommodityDataList.length)
                    }
                }
                pullDown={
                    () => {getShoppingDataList();}
                }
                onScroll={forceCheck}
            >
                <div>
                    <ShoppingClassify />
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
            </Scroll>

            {renderRoutes(props.route.routes)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // shoppingTopDataList: state.getIn(['shopping', 'shoppingTopDataList']).toJS(),
        // shoppingMidDataList: state.getIn(['shopping', 'shoppingMidDataList']).toJS(),
        shoppingCommodityDataList: state.getIn(['shopping', 'shoppingCommodityDataList']).toJS(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShoppingDataList: () => {
            dispatch(getShoppingDataList_AC())
        },
        // 顶部上拉加载
        getMoreCommodityData: (offset) => {
            console.log('offset', offset)
            dispatch(getMoreCommodityData_AC(offset))
        },
        // 顶部下拉刷新
        // refreshCommodityData:
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Shopping));