import React from "react";
import loadingImg from './loading.gif'; // 一切静态资源皆可引入 webpack 打包
import "./loading.css";

function Loading (props) {
  const {Loading, title} = props
  // console.log(Loading);
  let displayStyle = Loading === true ? {display: ""} : {display: "none"};
  return (
      <div className="loading-container" style={ displayStyle }>
        <div className="loading-wrapper">
        <img src={loadingImg} width="18px" height="18px" alt="loading"></img>
                {/* 国际化 */}
        <div className="loading-title">{title}</div>
      </div>
    </div>
  )
}

export default Loading