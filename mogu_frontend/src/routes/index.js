import React, { lazy, Suspense} from 'react';
import { Redirect } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout';
import BlankLayout from '../layouts/BlankLayout';
import FooterLayout from '../layouts/FooterLayout';
import Discover from '../pages/Home/discover/Discover';
// 组件懒加载
const HomeComponent = lazy(() => import ('../pages/home/Home'))
const AttentionComponent = lazy(() => import ('../pages/attention/Attention'))
const ShoppingComponent = lazy(() => import ('../pages/shopping/Shopping'))
const MessageComponent = lazy(() => import ('../pages/message/Message'))
const MyComponent = lazy(() => import ('../pages/my/My'))
const DiscoverComponent = lazy(() => import ('../pages/Home/discover/Discover'))
const LiveComponent = lazy(() => import ('../pages/Home/live/Live'))
const NearbyComponent = lazy(() => import ('../pages/Home/nearby/Nearby'))
const SuspenseComponent = Component => props => {
    // fallback 是一个回滚事件
    return (
        <Suspense fallback= {null}>
            <Component {...props}>
            </Component>
        </Suspense>
    )
}

export default [
    {
        component: BlankLayout,
        routes: [
            {
                path: '/',
                component: FooterLayout,
                routes: [
                    {
                        path: '/',
                        exact: true,
                        render: () => <Redirect to="/home" />
                    }, 
                    {
                        path: '/home',
                        component: HomeLayout,
                        // component: SuspenseComponent(HomeComponent),
                        routes: [
                            {
                                path: '/home',
                                exact: true,
                                render: () => <Redirect to="/home/discover" />
                            },
                            {
                                path: '/home/discover',
                                component: SuspenseComponent(DiscoverComponent)
                            },
                            {
                                path: '/home/live',
                                component: SuspenseComponent(LiveComponent)
                            },
                            {
                                path: '/home/nearby',
                                component: SuspenseComponent(NearbyComponent)
                            }
                        ]
                    }, 
                    {
                        path: '/attention',
                        component: SuspenseComponent(AttentionComponent)
                    }, 
                    {
                        path: '/shopping',
                        component: SuspenseComponent(ShoppingComponent)
                    }, 
                    {
                        path: '/message',
                        component: SuspenseComponent(MessageComponent)
                    }, 
                    {
                        path: '/my',
                        component: SuspenseComponent(MyComponent)
                    }
                ]
            }
        ]
    }
]