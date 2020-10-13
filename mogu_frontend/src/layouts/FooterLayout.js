import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Bottom, TabBar, TabItem } from './FooterLayout.style'
import { NavLink } from 'react-router-dom'

function Footer(props) {
    const {route} = props;
    console.log(route);
    console.log('-------', route.routes)
    return (
        <React.Fragment>
            <Bottom>
                <TabBar>
                    <NavLink to="/home">
                        <TabItem>
                            首页
                        </TabItem>
                    </NavLink>
                    <NavLink to="/attention">
                        <TabItem>
                            关注
                        </TabItem>
                    </NavLink>
                    <NavLink to="/shopping">
                        <TabItem>
                            商城
                        </TabItem>
                    </NavLink>
                    <NavLink to="/message">
                        <TabItem>
                            消息
                        </TabItem>
                    </NavLink>
                    <NavLink to="/my">
                        <TabItem>
                            我
                        </TabItem>
                    </NavLink>
                </TabBar>
            </Bottom>
            {renderRoutes(route.routes)}
        </React.Fragment>
    )
}
export default Footer;
