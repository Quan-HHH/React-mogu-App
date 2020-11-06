import styled from 'styled-components'

export const Bottom = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 44px;
    z-index: 99;
    border-top: 1px solid black;
`

export const TabBar = styled.div`
    background-color: #ffffff;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        color: black;
        font-weight: bolder;
    }
    .active {
        color: red;
    }
`

export const TabItem = styled.div`
    
`