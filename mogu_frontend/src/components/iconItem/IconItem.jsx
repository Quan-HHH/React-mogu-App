import React from 'react'
import { NavLink } from 'react-router-dom';
import './iconItem.css'
import { renderRoutes } from 'react-router-config'

function IconItem(props) {
    // console.log(props)
    const { iconCode, title, href, route } = props;
    console.log(route)
    return (
        <>
            <NavLink to={href ? href : "/my"}>
                <div className="icon-item-wrap">
                    <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: iconCode }}></span>
                    <span className="icon-item-title">{title}</span>
                </div>
            </NavLink>
            {renderRoutes(route)}
        </>
    )
}

export default IconItem;