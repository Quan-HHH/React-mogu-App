import styled from 'styled-components'
import style from '../assets/global-style'

export const HomeTop = styled.div`
    background-color: #ffffff;
    z-index: 99;
    position: fixed;
    top: 0;
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 24px; */
    input {
        border-radius: 100px;
        border: none;
        height: 0.7733333rem;
        width: 1.813333rem;
        background-color: #eeeeee;
        padding: 0 10px;
        margin-left: 10px;
    }
    .iconWrap {
        width: 1.813333rem;
        span {
            font-size: 22.5px;
            color: #777777;
            padding-right: 10px;
        }
    }

`

export const HomeTabBar = styled.div`
    a {
        padding: 0 5px;
        font-size: 0.46666rem;
        font-weight: bolder;
        color: black;
        position: relative;
    }
    a.active:after {
        content: '';
        border-radius: 5px;
        display: block;
        width:30px;
        background-color: ${style["theme-color"]};
        height: 3px;
        position:absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 1s;
    }
`