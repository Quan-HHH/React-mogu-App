import React from 'react'
import './resItem.css'

function ResItem(props) {
    // console.log(props, '--------------')
    return (
        <div className="res__item" style={{width: props.width+'%'}}>
            <div className="res__image">
                <img src={props.imgSrc} alt=""/>
            </div>
            <div className="res__title">
                {props.title}
            </div>
        </div>
    )
}

export default ResItem;