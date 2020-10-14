import styled from 'styled-components';

export const AttentionTop = styled.div`
    position: fixed;
    top: 0;
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
`

export const AttentionTabBar = styled.div`
    a {
        color: black;
        position: relative;
    }
    a.active {
        transition: all 300ms linear;
    }
    a.active:after {
        content: '';
        border-radius: 5px;
        display: block;
        width:30px;
        background-color:red;
        height: 3px;
        position:absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`