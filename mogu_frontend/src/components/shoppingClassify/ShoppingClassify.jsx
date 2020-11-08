import React, { memo, useEffect } from 'react'
import ResItem from '../resItem/ResItem'
import ModBlock from '../modBlock/ModBlock'
import { connect } from 'react-redux'
import { getShoppingDataList_AC } from '@/pages/shopping/store/actionCreators'

function ShoppingClassify(props) {
    const { getShoppingDataList, shoppingTopDataList, shoppingMidDataList } = props;
    // console.log(123)
    // console.log('data',shoppingTopDataList, shoppingMidDataList)
    useEffect(() => {

        if (!shoppingTopDataList.length && !shoppingMidDataList.length) {
            // console.log('----------------')
            getShoppingDataList();
        }
    }, [])
    return (
        <>
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
                <img src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png" alt="" />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        shoppingTopDataList: state.getIn(['shopping', 'shoppingTopDataList']).toJS(),
        shoppingMidDataList: state.getIn(['shopping', 'shoppingMidDataList']).toJS(),
        // shoppingCommodityDataList: state.getIn(['shopping', 'shoppingCommodityDataList']).toJS(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShoppingDataList: () => {
            dispatch(getShoppingDataList_AC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShoppingClassify ,(pre,next) => {
    if (pre.shoppingTopDataList.length && pre.shoppingMidDataList.length) {
        return true;
    }
    return false;
}))
