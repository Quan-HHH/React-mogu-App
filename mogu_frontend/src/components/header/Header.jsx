import React from 'react';
import './header.css'

function Header(props) {
    const { title, iconLeft, iconRight} = props;
    return (
        <div className="header-wrap">
            <span className="icon iconfont"
                dangerouslySetInnerHTML={{__html: iconLeft}}
                onClick={() => window.history.back()}
            ></span>
            <div>{title}</div>
            <span className="icon iconfont"
                dangerouslySetInnerHTML={{__html: iconRight}}
            ></span>
        </div>
    )
}

export default Header;