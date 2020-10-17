import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.styl';

interface Props {
    isGoBackNeeded?: boolean;
    leftTitle?: string;
    leftTitleURL?: string;
    middleTitle?: string;
    rightTitle?: string;
    rightTitleURL?: string;
}
const judgeIsItIconfont: RegExp = /^&#.+;$/;
class Header extends Component<Props>{
    render() {
        const {
            isGoBackNeeded = false,
            leftTitle,
            leftTitleURL,
            middleTitle,
            rightTitle,
            rightTitleURL
        } = this.props;

        //左侧的title的判断
        let divLeft: JSX.Element;

        if (isGoBackNeeded) {
            if (leftTitle || leftTitleURL) {
                throw new Error("在确定了leftTitle是回退按钮时，不能传入leftTitle或者leftTitleURL了");
            }
            divLeft = (
                <span className="icon iconfont" onClick={() => window.history.back()}>
                    &#xe647;
                </span>
            )
        } else {
            if (leftTitle) {
                if (judgeIsItIconfont.test(leftTitle)) {
                    if (leftTitleURL) {
                        divLeft = (
                            <div className="leftTitle">
                                <Link to={leftTitleURL}>
                                    <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: leftTitle }}></span>
                                </Link>
                            </div>
                        )
                    } else {
                        divLeft = (
                            <div className="leftTitle">
                                <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: leftTitle }}></span>
                            </div>
                        )
                    }
                } else {
                    if (leftTitleURL) {
                        divLeft = (
                            <div className="leftTitle">
                                <Link to={leftTitleURL}>
                                    {leftTitle}
                                </Link>
                            </div>
                        )
                    } else {
                        divLeft = (
                            <div className="leftTitle">
                                {leftTitle}
                            </div>
                        )
                    }
                }
            } else {
                if (leftTitleURL) {
                    throw new Error("组件Props参数错误，传入leftTitleURL的前提是要传入leftTitle");
                } else {
                    divLeft = (
                        <span className="nothing-left" onClick={e => e.preventDefault()}>
                            nothing-left
                        </span>
                    )
                }
            }
        }

        //右侧的title的判断
        let divRight: JSX.Element;

        if (rightTitle) {
            if (judgeIsItIconfont.test(rightTitle)) {
                if (rightTitleURL) {
                    divRight = (
                        <div className="rightTitle">
                            <Link to={rightTitleURL}>
                                <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: rightTitle }}></span>
                            </Link>
                        </div>
                    )
                } else {
                    divRight = (
                        <div className="rightTitle">
                            <span className="icon iconfont" dangerouslySetInnerHTML={{ __html: rightTitle }}></span>
                        </div>
                    )
                }
            } else {
                if (rightTitleURL) {
                    divRight = (
                        <div className="rightTitle">
                            <Link to={rightTitleURL}>
                                {rightTitle}
                            </Link>
                        </div>
                    )
                } else {
                    divRight = (
                        <div className="rightTitle">
                            {rightTitle}
                        </div>
                    )
                }
            }
        } else {
            if (rightTitleURL) {
                throw new Error("组件Props参数错误，传入rightTitleURL的前提是要传入rightTitle");
            } else {
                divRight = (
                    <div className="nothing-right" onClick={e => e.preventDefault()}>
                        nothing-right
                    </div>
                )
            }
        }

        //中间的title的判断
        let divMiddle: JSX.Element;
        if (middleTitle) {
            divMiddle = (
                <div className="middleTitle">
                    {middleTitle}
                </div>
            )
        } else {
            divMiddle = (
                <div className="middleTitle no-middle-title" onClick={e => e.preventDefault()}>
                    no-middle-title
                </div>
            )
        }

        return (
            <div className="baseUIHeader">
                {
                    divLeft
                }
                {
                    divMiddle
                }
                {
                    divRight
                }
            </div>
        )
    }
}

export default Header;