import React from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { HomeTop, HomeTabBar } from './HomeLayout.style'

function Home(props) {
    const { route } = props;
    return (
        <>  
            <HomeTop>
                <input type="text" className="iconfont" placeholder='&#xe608; 搜索' />
                <HomeTabBar>
                    <NavLink to="/home/discover">
                        发现
                    </NavLink>
                    <NavLink to="/home/live">
                        直播
                    </NavLink>
                    <NavLink to="/home/nearby">
                        附近
                    </NavLink>
                </HomeTabBar>
                <div className="iconWrap">
                    <span className="icon iconfont">&#xe604;</span>
                    <span className="icon iconfont">&#xe62f;</span>
                </div>
            </HomeTop>
            {renderRoutes(route.routes)}
        </>
    )
}

export default Home;