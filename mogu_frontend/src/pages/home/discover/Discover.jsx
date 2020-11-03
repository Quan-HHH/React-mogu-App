import React, { useEffect, useState } from 'react';
import './discover.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import ResItem from '../../../components/resItem/ResItem'
import ModelItem from '../../../components/modelItem/ModelItem'
import { connect } from 'react-redux'
import { getDiscoverList_AC } from './store/actionCreators'

function Discover(props) {
    // console.log('jhvgjhjh',props.data)
    const { getDiscoverDataList } = props;
    const { resItemDataList, modelDataList } = props;
    // console.log(modelDataListt, 1212121212)
    const [slideList] = useState([
        {
            id: 1,
            src: 'https://s5.mogucdn.com/mlcdn/c45406/201015_2h25ghj9j946736l66d5f846ikc67_1060x367.jpg',
            linkUrl: '#'
        },{
            id: 2,
            src: "https://s11.mogucdn.com/mlcdn/c45406/201018_01kc4569hk0j56ick9jd1g2e71d5e_1060x367.png",
            linkUrl: '#'
        },{
            id: 3,
            src: "https://s5.mogucdn.com/mlcdn/c45406/201016_82kee329358f2el561c90ie230d37_1060x367.jpg",
            linkUrl: '#'
        },{
            id: 4,
            src: "https://s5.mogucdn.com/mlcdn/c45406/201016_6g6d26iaf716gjhll6eef8d014cg2_1060x367.png",
            linkUrl: '#'
        }
    ])
    useEffect(() => {
        new Swiper('.swiper-container', {
            
            autoplay: true,
            speed: 500,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
            },
            // scrollbar: {//下划线分页
            //     el: '.swiper-scrollbar',
            // }
        })
    }, [])

    useEffect(() => {
        getDiscoverDataList()
    },[])
    return (
        <>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        slideList.map((item, i) => {
                            return (<div className="swiper-slide" key={item.id}>
                                <a href={item.linkUrl}>
                                    <img src={item.src} alt={item.src} width="100%" height="100%"/>
                                </a>
                            </div>)
                        })
                    }
                    
                </div>

                <div className="swiper-pagination"></div>
                {/* <div className="swiper-scrollbar"></div> */}
            </div>
            <div className="res">
                <div className="res__wrap">
                    {
                        resItemDataList.map((item, i) => (
                                <ResItem imgSrc={item.image} title={item.title} key={item.id} width={20} />
                            )
                        )
                    }
                </div>
            </div>
            <div className="waterfall">
                <div className="waterfall-list">
                    {
                        modelDataList.map((item, i) => (
                            <ModelItem cover={item.cover} key={i} avatar={item.avatar} title={item.title} userInfo={item.userInfo} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        resItemDataList: state.getIn(['discover','resItemList']).toJS(),
        modelDataList: state.getIn(['discover', 'modelDataList']).toJS(),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDiscoverDataList: () => {
            dispatch(getDiscoverList_AC())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Discover);