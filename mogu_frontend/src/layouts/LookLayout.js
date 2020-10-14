import React from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { LookTabBar } from './LookLayout.style'

function Look(props) {
    const { route } = props;
    return (
        <>
            <LookTabBar>
                <NavLink to="/attention/look/hot">
                    热门
                </NavLink>
                <NavLink to="/attention/look/hot">
                    扣墙
                </NavLink>
                <NavLink to="/attention/look/hot">
                    穿搭
                </NavLink>
                <NavLink to="/attention/look/hot">
                    美妆
                </NavLink>
                <NavLink to="/attention/look/hot">
                    鞋包
                </NavLink>
                <NavLink to="/attention/look/hot">
                    配饰
                </NavLink>
                <NavLink to="/attention/look/hot">
                    汉服
                </NavLink>
                <NavLink to="/attention/look/hot">
                    居家
                </NavLink>
            </LookTabBar>
            {renderRoutes(route.routes)}
        </>
    )
}

export default Look;