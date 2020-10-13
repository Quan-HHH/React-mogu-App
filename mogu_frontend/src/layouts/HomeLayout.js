import React from 'react';
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { HomeTop, HomeTabBar } from './HomeLayout.style'

function Home(props) {
    const { route } = props;

    return (
        <>  
            <HomeTop>
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
            </HomeTop>
            {renderRoutes(route.routes)}
        </>
    )
}

export default Home;