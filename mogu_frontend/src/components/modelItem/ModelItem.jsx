import React from 'react'
import './modelItem.css'
export default function ModelItem(props) {
    const { cover, title, userInfo, avatar} = props;
    return (
        <div className="model-wrap">
            <div className="model__img">
                <img src={cover} alt=""/>
            </div>
            <div className="model__personal">
                <div className="model__personal-desc">{title}</div>
                <div className="model__personal-info">
                    <div className="model__personal-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <span className="model__personal-name">{userInfo}</span>
                </div>
            </div>
        </div>
    )
}

