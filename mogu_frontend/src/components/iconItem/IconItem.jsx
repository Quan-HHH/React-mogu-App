import React from 'react'
import './iconItem.css'

function IconItem(props) {
    const { iconCode, title } = props;
    return (
        <div className="icon-item-wrap">
            <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: iconCode }}></span>
            <span className="icon-item-title">{title}</span>
        </div>
    )
}

export default IconItem;