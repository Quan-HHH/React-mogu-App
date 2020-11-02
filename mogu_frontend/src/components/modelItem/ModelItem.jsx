import React from 'react'
import LazyLoad from 'react-lazyload'
import './modelItem.css'

export default function ModelItem(props) {
    const { cover, title, userInfo, avatar} = props;
    return (
        <div className="model-wrap">
            <div className="model__img">
                <LazyLoad 
                    scroll={true}
                    placeholder={<img 
                        width="100%" height="100%" 
                        src="https://s10.mogucdn.com/mlcdn/c45406/200521_5k8j79hg5c84bfhgcc27a666d61c9_250x250.jpg" alt="logo"/>}>
                    <img src={cover} alt=""/>
                </LazyLoad>
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

