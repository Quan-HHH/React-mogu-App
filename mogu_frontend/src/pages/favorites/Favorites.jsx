import React from 'react';
import Header from '@/components/header/Header'
import './favorites.css'
import { connect } from 'react-redux'
import FavoriteItem from '@/components/favoriteItem/FavoriteItem'

function Favorites(props) {
    // console.log(FavoriteItem)
    // console.log(props)
    const { favoriteGoodsList } = props;
    return (
        <div className="favorite">
            <Header title="收藏夹" iconLeft="&#xe60b;" iconRight="" />
            <div className="favorite-list-box">
                {
                    // 收藏夹中没有数据的话显示 背景图
                    !favoriteGoodsList.length && <div className="bgImg"></div>
                }
                {
                    // 有数据时显示收藏内容 map不遍历空数组
                    favoriteGoodsList.map(item => {
                        return (
                            <FavoriteItem key={item.id} stars={item.stars} img={item.img} price={item.price} title={item.title} />
                        )
                    })

                }
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        favoriteGoodsList: state.getIn(['shopping', 'collectDataList']).toJS().reverse()
    }
}


const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);