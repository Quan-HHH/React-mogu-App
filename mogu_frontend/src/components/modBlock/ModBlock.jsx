import React from 'react';
import './modBlock.css'

function ModBlock(props) {
    const { title, img} = props;
    return (
        <div className="mod-block-outer">
            <div className="img-block">
                <img src={img} alt=""/>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ModBlock;