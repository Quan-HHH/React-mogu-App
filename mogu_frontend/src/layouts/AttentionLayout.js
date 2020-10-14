import React from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { AttentionTop, AttentionTabBar } from './AttentionLayout.style'

function Attention(props) {
    const { route } = props;
    return (
        <>
            <AttentionTop>
                <AttentionTabBar>
                    <NavLink to="/attention/atten">
                        关注
                    </NavLink>
                    <NavLink to="/attention/look">
                        LOOK
                    </NavLink>
                </AttentionTabBar>
            </AttentionTop>
            {renderRoutes(route.routes)}
        </>
    )
}

export default Attention;